import { createContext } from "react";
import type {ApiResponse, TokenOutput} from "../models/Auth.ts";
import type {User} from "../models/User.ts";

export type AuthContextValue = {
    isLogged: boolean;
    setIsLogged:  React.Dispatch<React.SetStateAction<boolean>>;
    userData: User | null;
    setUserData:  React.Dispatch<React.SetStateAction<User | null>>;
    refresh: boolean;
    setRefresh:  React.Dispatch<React.SetStateAction<boolean>>;
    handleSignIn: (email: string, password: string, remember_me?: boolean) => Promise<ApiResponse<TokenOutput>>;
    handleLogout: () => void;
    loading: boolean;
};

export const AuthContext = createContext<AuthContextValue | null>(null);
