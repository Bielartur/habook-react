import axios from "axios";
import type {ApiResponse} from "../models/Auth.ts";

export type TokenOutput = { access: string };

let refreshPromise: Promise<string | null> | null = null;

function isTokenNotValid(resp: unknown): boolean {
    return (
        !!resp &&
        typeof resp === "object" &&
        (resp as any).success === false &&
        (resp as any).code === "token_not_valid"
    );
}

export async function refreshAccessToken(BASE_URL: string): Promise<string | null> {
    if (!refreshPromise) {
        refreshPromise = axios
            .post<ApiResponse<TokenOutput>>(`${BASE_URL}/auth/refresh`, {}, { withCredentials: true })
            .then((res) => {
                const data = res.data;
                if (data.success && data.payload?.access) return data.payload.access;
                return null;
            })
            .catch(() => null)
            .finally(() => {
                refreshPromise = null;
            });
    }

    return refreshPromise;
}

export { isTokenNotValid };
