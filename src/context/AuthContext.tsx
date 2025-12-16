import { createContext } from "react";
import type {ApiResponse, TokenOutput, User} from "../models/Auth.ts";

export type AuthContextValue = {
    isLogged: boolean;
    setIsLogged: (isLogged: boolean) => void;
    userData: User | null;
    setUserData: (userData: User) => void;
    handleSignIn: (email: string, password: string, remember_me?: boolean) => Promise<ApiResponse<TokenOutput>>;
    handleLogout: () => void;
    loading: boolean;
};

export const AuthContext = createContext<AuthContextValue | null>(null);
