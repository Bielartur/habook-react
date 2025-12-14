// src/hooks/useRequests.js
import {apiRequest} from "../utils/apiRequest.ts";
import type {ApiLogin, ApiRegister, TokenOutput, User} from "../models/Auth.ts";
import type {Book} from "../models/Books.ts";
import type {UserLivro} from "../models/UserBooks.ts";

// Authentication
const login = async ({ email, password }: ApiLogin) => {
    return await apiRequest<TokenOutput>("auth/login", "POST", { email, password }, false);
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

const getBooks = async () => {
    return await apiRequest<Book[]>("books/", "GET");
}

const getUserBooks = async () => {
    return await apiRequest<UserLivro>("me/books/progress", "GET", undefined, true);
}


// Exportando todas as requests
export const useRequests = () => ({
    // Auth
    login,
    cadastrar,
    refreshToken,
    logout,
    getUser,

    getBooks,
    getUserBooks,
});
