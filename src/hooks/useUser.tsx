import { use } from "react";
import { AuthContext } from "../context/AuthContext.tsx";

export function useUser() {
    const ctx = use(AuthContext);

    if (!ctx) {
        throw new Error("useUser deve ser usado dentro de AuthProvider");
    }

    return ctx;
}
