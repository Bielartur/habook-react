import {AuthForm} from "../components/auth/layout/AuthForm.tsx";
import {useForm} from "react-hook-form";
import {useAuth} from "../hooks/useAuth.tsx";
import type {ApiLogin} from "../models/Auth.ts";
import {AuthInput} from "../components/shared/inputs/AuthInput.tsx";
import {RememberMe} from "../components/auth/login/RememberMe.tsx";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {ErrorMessage} from "../components/shared/ErrorMessage.tsx";
import {useNavigate} from "react-router";
import toast from "react-hot-toast";

const loginSchema = yup.object({
    email: yup.string().email("Email inválido").required("O email é obrigatório"),
    password: yup
        .string()
        .required("A senha é obrigatória")
        .min(8, "A senha deve ter no mínimo 8 caracteres")
        .test(
            "not-numeric-only",
            "A senha não pode conter apenas números.",
            (value) => !/^\d+$/.test(value || "")
        ),
});

export const LoginPage = () => {
    const {handleSignIn} = useAuth()
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        // reset,
        formState: {isSubmitting, errors},
    } = useForm({
        defaultValues: {email: "", password: ""},
        resolver: yupResolver(loginSchema),
    });

    const onSubmit = async (data: ApiLogin) => {
        const response = await handleSignIn(data.email, data.password);
        if (response.success) {
            navigate("/")
            toast.success(response.message);
        } else {
            toast.error(response.message);
        }
    };

    return (
        <AuthForm
            title="Login"
            subtitle="Antes de iniciar sua jornada, faça seu login"
            submitLabel="Fazer login"
            onSubmit={handleSubmit(onSubmit)}
            isSubmiting={isSubmitting}
        >
            <div>
                <AuthInput
                    label="Email"
                    inputName="email"
                    type="email"
                    {...register("email")}
                />
                {errors?.email && <ErrorMessage message={errors.email.message}/>}
            </div>

            <div>
                <AuthInput
                    label="Senha"
                    inputName="password"
                    type="password"
                    {...register("password")}
                />
                {errors?.password && <ErrorMessage message={errors.password.message}/>}
            </div>

            <RememberMe inputName="remember_me" label="Lembrar de mim"/>
        </AuthForm>
    )
}