import {AuthForm} from "../components/auth/layout/AuthForm.tsx";
import {useForm} from "react-hook-form";
import {useAuth} from "../hooks/useAuth.tsx";
import type {ApiLogin} from "../models/Auth.ts";
import {AuthInput} from "../components/shared/inputs/AuthInput.tsx";
import {RememberMe} from "../components/auth/login/RememberMe.tsx";
import {yupResolver} from "@hookform/resolvers/yup";
import {ErrorMessage} from "../components/shared/ErrorMessage.tsx";
import {loginSchema} from "../models/schemas/AuthSchemas.ts";
import {useNavigate} from "react-router";
import toast from "react-hot-toast";

export const LoginPage = () => {
    const {handleSignIn} = useAuth()
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        // reset,
        formState: {isSubmitting, errors},
    } = useForm<ApiLogin>({
        defaultValues: {email: "", password: "", remember_me: false},
        resolver: yupResolver(loginSchema),
    });

    const onSubmit = async (data: ApiLogin) => {
        console.log(data);
        const response = await handleSignIn(data.email, data.password, data.remember_me);
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

            <RememberMe
                inputName="remember_me"
                label="Lembrar de mim"
                {...register("remember_me")}
            />

        </AuthForm>
    )
}