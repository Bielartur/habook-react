import { use } from "react";
import { AuthContext } from "../context/AuthContext.tsx";

export function useAuth() {
    const ctx = use(AuthContext);

    if (!ctx) {
        throw new Error("useAuth deve ser usado dentro de AuthProvider");
    }

    return ctx;
}
