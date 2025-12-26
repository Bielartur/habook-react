import { TitleConfig } from "../components/config/TitleConfig.tsx";
import { FormContainer } from "../components/config/FormContainer.tsx";
import { ButtonSave } from "../components/shared/buttons/ButtonSave.tsx";
import { WrapperConfig } from "../components/config/WrapperConfig.tsx";
import { ButtonGradient } from "../components/shared/buttons/ButtonGradient.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import { Lock } from "lucide-react";
import { PasswordInput } from "../components/shared/inputs/PasswordInput.tsx";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { changePasswordSchema } from "../models/schemas/AuthSchemas.ts";
import type { UserChangeForm } from "../models/User.ts";
import { useRequests } from "../hooks/useRequests.ts";
import toast from "react-hot-toast";
import { ErrorMessage } from "../components/shared/ErrorMessage.tsx";


export const SecurityConfig = () => {
    const { changePassword } = useRequests()

    const {
        register,
        handleSubmit,
        reset,
        formState: { isSubmitting, errors },
    } = useForm<UserChangeForm>({
        defaultValues: { old_password: "", new_password: "", confirm_password: "" },
        resolver: yupResolver(changePasswordSchema),
    });

    const onSubmit = async (data: UserChangeForm) => {
        const response = await changePassword(data);

        if (response.success) {
            toast.success(response.message);
            reset()
        } else {
            toast.error(response.message);
        }
    }

    const hasToken = true

    const textToken = hasToken ? (
        <>
            <p className="font-medium text-slate-600">
                Chave de Acesso Ativa
            </p>
            <p className="text-sm text-gray-600">
                Você possui uma chave de acesso configurada
            </p>
        </>
    ) : (
        <>
            <p className="font-medium text-slate-700">
                Nenhuma Chave Configurada
            </p>
            <p className="text-sm text-gray-600">
                Gere uma chave para acessar a API do Habook
            </p>
        </>
    );


    return (
        <>
            <TitleConfig title="Segurança" subtitle="Gerencie a segurança da sua conta" />
            <WrapperConfig>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormContainer
                        title="Alterar senha"
                        subtitle="Atualize sua senha regularmente para maior segurança"
                        delay={0.06}
                    >

                        <div className="w-full">
                            <PasswordInput label="Senha antiga"
                                placeholder="Digite o sua senha atual" {...register("old_password")} />
                            {errors?.old_password && <ErrorMessage message={errors.old_password.message} />}
                        </div>

                        <div className="w-full">
                            <PasswordInput label="Senha nova"
                                placeholder="Digite sua nova senha" {...register("new_password")} />
                            {errors?.new_password && <ErrorMessage message={errors.new_password.message} />}
                        </div>


                        <div className="w-full">
                            <PasswordInput label="Confirmação da nova senha"
                                placeholder="Confirme sua nova senha" {...register("confirm_password")} />
                            {errors?.confirm_password && <ErrorMessage message={errors.confirm_password.message} />}
                        </div>

                        <ButtonSave type={"submit"} className="mt-3" disabled={isSubmitting} />
                    </FormContainer>
                </form>

                <FormContainer
                    title="Chave de acesso da API"
                    subtitle="Atualizar chave de acesso"
                    delay={0.12}
                >
                    <div className="py-6 px-2 pt-0 space-y-4 w-full">
                        <div className="p-4 bg-slate-100 rounded-lg">
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center 
                            ${hasToken ? "bg-accent/10 text-accent" : "bg-slate-200 text-slate-700"}`}
                                >
                                    <Lock size={20} />
                                </div>
                                <div>
                                    {textToken}
                                </div>
                            </div>
                        </div>
                        <ButtonGradient type="button">
                            <FontAwesomeIcon icon={faRefresh} />
                            Gerar Nova Chave
                        </ButtonGradient>
                    </div>
                </FormContainer>
            </WrapperConfig>
        </>
    )
}