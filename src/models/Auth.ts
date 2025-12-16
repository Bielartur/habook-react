export interface PaginationMeta {
    current_page: number;
    total_pages: number;
    total_items: number;
    per_page: number;
}

export interface ApiSuccess<T> {
    success: true;
    message: string;
    payload: T | null;
    meta?: PaginationMeta;
}

export interface ApiError {
    success: false;
    message: string;
    errors?: Record<string, string[]>;
}

export interface ApiErrorSchema {
    detail: Array<
        {
            type: string,
            loc: string[],
            msg: string,
            ctx: {
                reason: string
            }
        }
    >;
}

export type ApiAuthenticationError = {
    detail: string,
    code: string,
    messages: Array<{
        "token_class": string,
        "token_type": string,
        "message": string
    }>
}


export type ApiResponse<T> = ApiSuccess<T> | ApiError;

export type ApiLogin = {
    email: string;
    password: string;
    remember_me?: boolean;
}

export type ApiRegister = {
    name: string
    email: string
    password: string
    confirm_password: string
}

export type User = {
    id: number,
    name: string,
    email: string,
    meta_anual_paginas: number,
    meta_mensal_paginas: number,
    meta_diaria_paginas: number,
    livros: number[]
}

export type TokenOutput = {
    access: string;
};