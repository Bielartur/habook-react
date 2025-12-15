import {AuthWrapper} from "../components/auth/layout/AuthWrapper.tsx";
import {AuthContainer} from "../components/auth/layout/AuthContainer.tsx";
import {ImageContainer} from "../components/auth/layout/ImageContainer.tsx";
import {Outlet} from "react-router";
import {useEffect} from "react";
import {ChildrenContainer} from "../components/auth/layout/ChildrenContainer.tsx";

export const AuthLayout = () => {

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