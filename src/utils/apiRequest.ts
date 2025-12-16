import axios, {type AxiosRequestConfig, type Method} from "axios";
import type {ApiError} from "../models/Api.ts";
import type {ApiResponse} from "../models/Auth.ts";
import {clearAccessToken, getAccessToken, setAccessToken} from "./HelpersToken.ts";
import {isTokenNotValid, refreshAccessToken} from "./authTokenManager.ts";

const BASE_URL = "http://localhost:8000/api/v1";

export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";


function normalizeAxiosError(error: unknown): ApiError {
    if (axios.isAxiosError(error)) {
        const data = error.response?.data;

        // Backend respondeu no padrão
        if (data && data.success === false) {
            return data as ApiError;
        }

        if (data && data.code === "token_not_valid") {
            return data;
        }


        // Erro HTTP fora do contrato
        return {
            success: false,
            message:
                data?.message ||
                error.response?.statusText ||
                "Erro de comunicação com o servidor",
        };
    }

    return {
        success: false,
        message: "Erro inesperado",
    };
}


export async function apiRequest<T>(
    endpoint: string,
    method: HttpMethod = "GET",
    data: Record<string, unknown> = {},
    withAuth: boolean = true
): Promise<ApiResponse<T>> {
    const makeConfig = (token?: string | null) => {
        const headers: AxiosRequestConfig["headers"] = {};

        if (withAuth && token) {
            headers.Authorization = `Bearer ${token}`;
        }

        return {
            url: `${BASE_URL}/${endpoint}`,
            method: method as Method,
            headers,
            data: method !== "GET" ? data : undefined,
            params: method === "GET" ? data : undefined,
            withCredentials: true, // importante se você usa cookie pro refresh
        } satisfies AxiosRequestConfig;
    };

    // 1) tenta com token atual
    const token = getAccessToken();

    try {
        const res1 = await axios<ApiResponse<T>>(makeConfig(token));

        // se backend respondeu 200 mas com code token_not_valid (acontece em alguns setups)
        if (isTokenNotValid(res1.data)) {
            const newToken = await refreshAccessToken(BASE_URL);
            console.log("Novo token: " +newToken);

            if (!newToken) {
                clearAccessToken();
                return { success: false, message: "Sessão expirada. Faça login novamente.", code: "token_not_valid" } as any;
            }

            setAccessToken(newToken);

            const res2 = await axios<ApiResponse<T>>(makeConfig(newToken));
            return res2.data;
        }

        return res1.data;
    } catch (err) {
        const apiErr = normalizeAxiosError(err);

        // 2) se veio como erro HTTP e normalize identificou token inválido,
        // tenta refresh 1x e repete
        if (
            ((apiErr as any)?.code === "token_not_valid" || apiErr.message == "Unauthorized")
            && withAuth
        ) {
            const newToken = await refreshAccessToken(BASE_URL);

            if (!newToken) {
                clearAccessToken();
                return apiErr; // ou retorna um erro mais amigável
            }

            setAccessToken(newToken);

            try {
                const res2 = await axios<ApiResponse<T>>(makeConfig(newToken));
                return res2.data;
            } catch (err2) {
                return normalizeAxiosError(err2);
            }
        }

        return apiErr;
    }
}
