import {TitleConfig} from "../components/config/TitleConfig.tsx";
import {InfoContainer} from "../components/config/InfoContainer.tsx";
import {FormContainer} from "../components/config/FormContainer.tsx";
import {BasicInput} from "../components/shared/inputs/BasicInput.tsx";
import {WrapperConfig} from "../components/config/WrapperConfig.tsx";
import {ButtonSave} from "../components/shared/buttons/ButtonSave.tsx";
import {useAuth} from "../hooks/useAuth.tsx";
import {formatDate} from "../utils/globalHelpers.ts";
import {useForm} from "react-hook-form";
import {ErrorMessage} from "../components/shared/ErrorMessage.tsx";
import {yupResolver} from "@hookform/resolvers/yup";
import {editUserSchema} from "../models/schemas/AuthSchemas.ts";
import type {UserChangeProfile} from "../models/User.ts";
import {useRequests} from "../hooks/useRequests.ts";
import toast from "react-hot-toast";
import {useEffect} from "react";

export const UserConfig = () => {
    const {userData, setUserData} = useAuth()
    const {changeProfile} = useRequests();

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isSubmitting},
    } = useForm<UserChangeProfile>({
        defaultValues: {
            name: "",
            email: "",
        },
        resolver: yupResolver(editUserSchema),
    })

    useEffect(() => {
        if (userData) {
            reset({
                name: userData.name ?? "",
                email: userData.email ?? "",
            });
        }
    }, [userData, reset]);

    const onSubmit = async (data: UserChangeProfile) => {
        const response = await changeProfile(data)

        if (response.success && response.payload) {
            setUserData((prev) => {
                if (!prev) return null; // ou monte um User mínimo se fizer sentido
                return { ...prev, ...response.payload };
            });
            toast.success(response.message)
        } else {
            toast.error(response.message)
        }
    }

    return (
        <>
            <TitleConfig title="Configurações" subtitle="Ajuste as suas informações do seu perfil"/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <WrapperConfig>
                    <div className="flex flex-wrap min-w-28 gap-4">
                        <InfoContainer label="Conta criada em"
                                       info={userData?.date_joined ? formatDate(userData?.date_joined) : undefined}/>
                        <InfoContainer label="Último login"
                                       info={userData?.date_joined ? formatDate(userData?.last_login) : undefined}/>
                    </div>

                    <FormContainer title="Informações pessoais" subtitle="Atualize seus dados cadastrais">
                        <div className="w-full">
                            <BasicInput label="Nome" placeholder="Digite o seu nome" {...register("name")}/>
                            {errors?.name && <ErrorMessage message={errors.name.message}/>}
                        </div>

                        <div className="w-full">
                            <BasicInput label="Email" placeholder="Digite o seu email" {...register("email")}/>
                            {errors?.email && <ErrorMessage message={errors.email.message}/>}
                        </div>

                    </FormContainer>

                    <ButtonSave type="submit" disabled={isSubmitting}/>
                </WrapperConfig>
            </form>
        </>
    )
}