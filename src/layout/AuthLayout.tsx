import {AuthWrapper} from "../components/auth/layout/AuthWrapper.tsx";
import {AuthContainer} from "../components/auth/layout/AuthContainer.tsx";
import {ImageContainer} from "../components/auth/layout/ImageContainer.tsx";
import {Outlet, useNavigate} from "react-router";
import {useEffect} from "react";
import {ChildrenContainer} from "../components/auth/layout/ChildrenContainer.tsx";
import { useAuth } from "../hooks/useAuth.tsx";

export const AuthLayout = () => {
    const { isLogged } = useAuth()
    const navigate = useNavigate()

    if (isLogged) {
        navigate("/")
    }

    useEffect(() => {
        document.body.classList.add("auth-body");

        return () => {
            document.body.classList.remove("auth-body");
        }
    }, [])

    const footerCopy = "Você não está apenas lendo. Está construindo uma história de disciplina e conhecimento."

    return (
        <AuthWrapper>
            <AuthContainer>
                <ImageContainer />
                <ChildrenContainer footerCopy={footerCopy}>
                    <Outlet />
                </ChildrenContainer>
            </AuthContainer>
        </AuthWrapper>
    )
}