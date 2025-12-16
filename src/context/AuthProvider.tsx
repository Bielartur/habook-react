import {useEffect, useState} from "react";
import { AuthContext, type AuthContextValue } from "./AuthContext.tsx";
import {useRequests} from "../hooks/useRequests.ts";
import {clearAccessToken, setAccessToken} from "../utils/HelpersToken.ts";
import type {ApiResponse, User} from "../models/Auth.ts";
import toast from "react-hot-toast";

type Props = {
    children: React.ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
    const { login, logout, getUser } = useRequests();

    const [isLogged, setIsLogged] = useState(false);
    const [userData, setUserData] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        void handleInitUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleInitUser = async () => {
        const resetAuth = () => {
            clearAccessToken();
            setIsLogged(false);
            setUserData(null);
        };

        try {
            const me = (await getUser()) as ApiResponse<User>; // já faz refresh+retry internamente

            if (!me.success || !me.payload) {
                resetAuth();
                return;
            }

            setUserData(me.payload);
            setIsLogged(true);
        } finally {
            setLoading(false);
        }
    };

    const handleSignIn = async (email: string, password: string) => {
        const resp = await login({ email, password });

        if (!resp.success) {
            return resp; // ApiError
        }

        const access = resp.payload?.access;

        if (!access) {
            // sucesso sem access = contrato quebrado
            return {
                success: false as const,
                message: "Login retornou sucesso sem token de acesso.",
            };
        }

        setAccessToken(access);

        // Como login não retorna user, você tem duas opções:
        // 1) buscar /me agora
        const me = await getUser(); // ApiResponse<User>
        if (!me.success || !me.payload) {
            clearAccessToken();
            setIsLogged(false);
            setUserData(null);
            return {
                success: false as const,
                message: me.success ? "Usuário não encontrado." : me.message,
                errors: !me.success ? me.errors : undefined,
            };
        }

        setUserData(me.payload);
        setIsLogged(true);

        return resp; // ApiSuccess<TokenOutput>
    }

    const handleLogout = async () => {
        const resp = await logout();

        if (!resp.success) {
            return resp; // ApiError
        }

        clearAccessToken();
        setIsLogged(false);
        setUserData(null);
        setLoading(false);
        toast.success(resp.message);

        return resp; // ApiSuccess<unknown>
    }


    const value: AuthContextValue = {
        isLogged,
        setIsLogged,
        userData,
        setUserData,
        handleSignIn,
        handleLogout,
        loading,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
