import {AuthForm} from "../components/auth/layout/AuthForm.tsx";

const registerFields = [
    {name: "name", label: "Nome"},
    {name: "email", label: "Email", type: "email"},
    {name: "password", label: "Senha", type: "password"},
    {name: "confirm_password", label: "Confirmação de senha", type: "password"},
]

export const RegisterPage = () => {
    return (
        <AuthForm
            title="Crie sua conta"
            subtitle="Cadastre-se para acompanhar suas leituras."
            submitLabel="Criar conta"
            formFields={registerFields}
        />
    )
}