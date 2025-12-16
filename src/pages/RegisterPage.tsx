import { AuthForm } from "../components/auth/layout/AuthForm.tsx";
import { AuthInput } from "../components/shared/inputs/AuthInput.tsx";
import {useNavigate} from "react-router";
import {useForm} from "react-hook-form";
import type {ApiRegister} from "../models/Auth.ts";
import {yupResolver} from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import {registerSchema} from "../models/schemas/AuthSchemas.ts";
import {ErrorMessage} from "../components/shared/ErrorMessage.tsx";
import {useRequests} from "../hooks/useRequests.ts";

export const RegisterPage = () => {
    const { cadastrar } = useRequests()
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        // reset,
        formState: {isSubmitting, errors},
    } = useForm<ApiRegister>({
        defaultValues: {name: "", email: "", password: "", confirm_password: ""},
        resolver: yupResolver(registerSchema),
    });

    const onSubmit = async (data: ApiRegister) => {
        const response = await cadastrar(data);
        if (response.success) {
            navigate("/")
            toast.success(response.message);
        } else {
            toast.error(response.message);
        }
    };

    return (
        <AuthForm
            title="Crie sua conta"
            subtitle="Cadastre-se para acompanhar suas leituras."
            submitLabel="Criar conta"
            onSubmit={handleSubmit(onSubmit)}
            isSubmiting={isSubmitting}
        >
            <div>
                <AuthInput
                    label="Nome"
                    inputName="nome"
                    {...register("name")}
                />
                 {errors?.name && <ErrorMessage message={errors.name.message} />}
            </div>
            <div>
                <AuthInput
                    label="Email"
                    inputName="email"
                    type="email"
                    {...register("email")}
                />
                 {errors?.email && <ErrorMessage message={errors.email.message} />}
            </div>

            <div>
                <AuthInput
                    label="Senha"
                    inputName="password"
                    type="password"
                    {...register("password")}
                />
                 {errors?.password && <ErrorMessage message={errors.password.message} />}
            </div>

            <div>
                <AuthInput
                    label="Confirmação de senha"
                    inputName="confirm_password"
                    type="password"
                    {...register("confirm_password")}
                />
                 {errors?.confirm_password && <ErrorMessage message={errors.confirm_password.message} />}
            </div>
        </AuthForm>
    )
}