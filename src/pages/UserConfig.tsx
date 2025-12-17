import {TitleConfig} from "../components/config/TitleConfig.tsx";
import {InfoContainer} from "../components/config/InfoContainer.tsx";
import {FormContainer} from "../components/config/FormContainer.tsx";
import {BasicInput} from "../components/shared/inputs/BasicInput.tsx";
import {WrapperConfig} from "../components/config/WrapperConfig.tsx";
import {ButtonSave} from "../components/shared/buttons/ButtonSave.tsx";
import {useAuth} from "../hooks/useAuth.tsx";
import {formatDate} from "../utils/globalHelpers.ts";

export const UserConfig = () => {
    const { userData } = useAuth()

    return (
        <>
            <TitleConfig title="Configurações" subtitle="Ajuste as suas informações do seu perfil"/>
            <WrapperConfig>
                <div className="flex flex-wrap min-w-28 gap-4">
                    <InfoContainer label="Conta criada em" info={userData?.date_joined ? formatDate(userData?.date_joined) : undefined} />
                    <InfoContainer label="Último login" info={userData?.date_joined ? formatDate(userData?.last_login) : undefined} />
                </div>

                <FormContainer title="Informações pessoais" subtitle="Atualize seus dados cadastrais">
                    <BasicInput label="Nome" placeholder="Digite o seu nome" value={userData?.name}/>
                    <BasicInput label="Email" placeholder="Digite o seu email" value={userData?.email}/>
                </FormContainer>

                <ButtonSave/>
            </WrapperConfig>
        </>
    )
}