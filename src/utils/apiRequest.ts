import axios, {type AxiosRequestConfig, type Method} from "axios";
import type {ApiError} from "../models/Api.ts";
import type {ApiResponse} from "../models/Auth.ts";

const BASE_URL = "http://localhost:8000/api/v1";

export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";


function normalizeAxiosError(error: unknown): ApiError {
    if (axios.isAxiosError(error)) {
        const data = error.response?.data;

        // Backend respondeu no padrão
        if (data && data.success === false) {
            return data as ApiError;
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
    const accessToken = "";

    const headers: AxiosRequestConfig["headers"] = {};

    if (withAuth && accessToken) {
        headers.Authorization = `Bearer ${accessToken}`;
    }

    try {
        const response = await axios<ApiResponse<T>>({
            url: `${BASE_URL}/${endpoint}`,
            method: method as Method,
            headers,
            data: method !== "GET" ? data : undefined,
            params: method === "GET" ? data : undefined,
        });

        return response.data;
    } catch (err) {
        return normalizeAxiosError(err);
    }
}

