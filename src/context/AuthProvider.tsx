import {useEffect, useState} from "react";
import { AuthContext, type AuthContextValue } from "./AuthContext.tsx";
import {useRequests} from "../hooks/useRequests.ts";
import {clearAccessToken, getAccessToken, setAccessToken} from "../utils/HelpersToken.ts";
import type {ApiResponse, TokenOutput, User} from "../models/Auth.ts";

type Props = {
    children: React.ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
    const { login, getUser, refreshToken } = useRequests();

    const [isLogged, setIsLogged] = useState(false);
    const [userData, setUserData] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        void handleInitUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function handleInitUser() {
        const token = getAccessToken();

        const resetAuth = () => {
            clearAccessToken();
            setIsLogged(false);
            setUserData(null);
        };

        const finish = () => setLoading(false);

        const fetchMe = () => getUser() as Promise<ApiResponse<User>>;

        const isTokenNotValid = (resp: ApiResponse<User>) =>
            !resp.success && (resp as any)?.code === "token_not_valid";

        try {
            if (!token) {
                resetAuth();
                finish();
                return;
            }

            // 1) tenta buscar o usuário
            let me = await fetchMe();

            // 2) se token inválido, tenta refresh 1x e refaz /me
            if (isTokenNotValid(me)) {
                const refreshed = (await refreshToken()) as ApiResponse<TokenOutput>;

                if (!refreshed.success || !refreshed.payload?.access) {
                    resetAuth();
                    finish();
                    return;
                }

                setAccessToken(refreshed.payload.access);
                me = await fetchMe();
            }

            // 3) falhou mesmo depois do refresh (ou falhou direto)
            if (!me.success || !me.payload) {
                resetAuth();
                finish();
                return;
            }

            // 4) sucesso
            setUserData(me.payload);
            setIsLogged(true);
            finish();
        } catch {
            // fallback seguro para qualquer exceção inesperada
            resetAuth();
            finish();
        }
    }

    async function handleSignIn(email: string, password: string) {
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


    const value: AuthContextValue = {
        isLogged,
        setIsLogged,
        userData,
        setUserData,
        handleSignIn,
        loading,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
