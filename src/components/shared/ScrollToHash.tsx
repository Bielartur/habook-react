import { useEffect } from "react";
import { useLocation } from "react-router";

export function ScrollToHash() {
    const { hash } = useLocation();

    useEffect(() => {
        if (!hash) return;

        const id = hash.replace("#", "");
        const el = document.getElementById(id);

        if (!el) return;

        // espera o DOM/layout estabilizar (ajuda quando tem loading)
        requestAnimationFrame(() => {
            el.scrollIntoView({ behavior: "smooth", block: "center" });
        });
    }, [hash]);

    return null;
}
