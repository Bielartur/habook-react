// src/hooks/useRequests.js
import {apiRequest} from "../utils/apiRequest.ts";
import type {ApiLogin, ApiRegister, TokenOutput, User} from "../models/Auth.ts";
import type {Book} from "../models/Books.ts";
import type {GetUserBooksParams, UserLivro} from "../models/UserBooks.ts";
import type {DashboardType, ReadingSummaryType} from "../models/Statistics.ts";

type QueryPrimitive = string | number | boolean;
type QueryValue = QueryPrimitive | QueryPrimitive[] | undefined;

export const buildQueryString = <T extends object>(params?: T): string => {
    if (!params) return "";

    const query = new URLSearchParams();

    for (const [key, value] of Object.entries(params as Record<string, QueryValue>)) {
        if (value === undefined || value === null) continue;

        if (Array.isArray(value)) {
            value.forEach((v) => query.append(key, String(v)));
        } else {
            query.append(key, String(value));
        }
    }

    return query.toString();
};



// Authentication
const login = async ({ email, password, remember_me }: ApiLogin) => {
    return await apiRequest<TokenOutput>("auth/login", "POST", { email, password, remember_me }, false);
};

const cadastrar = async ({ name, email, password, confirm_password }: ApiRegister) => {
    return await apiRequest<TokenOutput>("auth/register", "POST", { name, email, password, confirm_password }, false);
};

const refreshToken = async () => {
    return await apiRequest<TokenOutput>("auth/refresh", "POST", undefined, true);
};

const logout = async () => {
    return await apiRequest("auth/logout", "POST", {}, true);
};

const getUser = async () => {
    return await apiRequest<User>("me/", "GET", undefined, true);
};

const getDashboard = async () => {
    return await apiRequest<DashboardType>("me/dashboard", "GET", undefined, true);
};


const getBooks = async () => {
    return await apiRequest<Array<Book>>("books/", "GET");
}

const getReadingSummary = async () => {
    return await apiRequest<ReadingSummaryType>("me/books/reading-summary", "GET", undefined, true);
};

const getUserBooks = async (params?: GetUserBooksParams) => {
    const query = buildQueryString(params);

    const url = query
        ? `me/books/progress?${query}`
        : "me/books/progress";

    return apiRequest<UserLivro[]>(
        url,
        "GET",
        undefined,
        true
    );
};


// Exportando todas as requests
export const useRequests = () => ({
    // Auth
    login,
    cadastrar,
    refreshToken,
    logout,
    getUser,

    getDashboard,
    getBooks,
    getUserBooks,
    getReadingSummary,
});
