import {AuthForm} from "../components/auth/layout/AuthForm.tsx";

const loginFields = [
    {name: "email", label: "Email", type: "email"},
    {name: "password", label: "Senha", type: "password"},
]

export const LoginPage = () => {
    return (
        <AuthForm
            title="Login"
            subtitle="Antes de iniciar sua jornada, faça seu login"
            submitLabel="Fazer login"
            rememberMe={true}
            formFields={loginFields}
        />
    )
}