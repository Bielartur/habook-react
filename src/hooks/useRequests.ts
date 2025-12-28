// src/hooks/useRequests.js
import {apiRequest} from "../utils/apiRequest.ts";
import type {ApiLogin, ApiRegister, TokenOutput} from "../models/Auth.ts";
import type {AddBook, Book, Category} from "../models/Books.ts";
import type {GetUserBooksParams, UpdatePagesPayload, updatePagesResponse, UserLivro} from "../models/UserBooks.ts";
import type {DashboardType, ReadingSummaryType} from "../models/Statistics.ts";
import type {
    User,
    UserChangeForm,
    UserChangeProfile,
    UserGoalsForm,
    UserProfilePatch,
} from "../models/User.ts";
import type { AddRatingFormData, RatingData } from "../models/Rating.ts";

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

const saveGoals = async ({ meta_anual_paginas, meta_mensal_paginas, meta_diaria_paginas }: UserGoalsForm) => {
    return await apiRequest("me/goals", "PUT", { meta_anual_paginas, meta_mensal_paginas, meta_diaria_paginas }, true);
};

const changeProfile = async ({ name, email }: UserChangeProfile) => {
    return await apiRequest<UserProfilePatch>("me/profile", "PUT", { name, email }, true);
}

const changePassword = async ({ old_password, new_password, confirm_password }: UserChangeForm) => {
    return await apiRequest("me/password", "PUT", { old_password, new_password, confirm_password }, true);
};

const getDashboard = async () => {
    return await apiRequest<DashboardType>("me/dashboard", "GET", undefined, true);
};

const getReadingSummary = async () => {
    return await apiRequest<ReadingSummaryType>("me/books/reading-summary", "GET", undefined, true);
};

const getBooks = async () => {
    return await apiRequest<Array<Book>>("books/", "GET");
}

const addBook = async ({titulo, autor, categoria_id, total_paginas, isbn, capa_url, google_id}: AddBook) => {
    return await apiRequest("books/create/", "POST", {titulo, autor, categoria_id, total_paginas, isbn, capa_url, google_id}, true);
}

const getCategories = async () => {
    return await apiRequest<Array<Category>>("categories/", "GET");
}


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

const updatePages = async (  book_id: number, payload: UpdatePagesPayload) => {
    return await apiRequest<updatePagesResponse>(`me/books/${book_id}/progress`, "PATCH", payload, true);
}

const addRating = async (book_id: number, payload: AddRatingFormData) => {
    return await apiRequest<RatingData>(`me/books/${book_id}/rating`, "POST", payload, true);
}


// Exportando todas as requests
export const useRequests = () => ({
    // Auth
    login,
    cadastrar,
    refreshToken,
    logout,

    // User
    getUser,
    saveGoals,
    changePassword,
    changeProfile,

    // Statistics
    getDashboard,
    getUserBooks,
    getReadingSummary,

    // Books / Categories
    getBooks,
    addBook,
    updatePages,
    getCategories,
    addRating,
});
