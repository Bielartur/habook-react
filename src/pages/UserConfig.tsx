import {TitleConfig} from "../components/config/TitleConfig.tsx";
import {InfoContainer} from "../components/config/InfoContainer.tsx";
import {FormContainer} from "../components/config/FormContainer.tsx";
import {BasicInput} from "../components/shared/inputs/BasicInput.tsx";
import {WrapperConfig} from "../components/config/WrapperConfig.tsx";
import {ButtonSave} from "../components/shared/buttons/ButtonSave.tsx";

export const UserConfig = () => {
    return (
        <>
            <TitleConfig title="Configurações" subtitle="Ajuste as suas informações do seu perfil"/>
            <WrapperConfig>
                <div className="flex flex-wrap min-w-28 gap-4">
                    <InfoContainer label="Conta criada em" info="19/10/2025"/>
                    <InfoContainer label="Último login" info="29/11/2025"/>
                </div>

                <FormContainer title="Informações pessoais" subtitle="Atualize seus dados cadastrais">
                    <BasicInput label="Nome" placeholder="Digite o seu nome"/>
                    <BasicInput label="Email" placeholder="Digite o seu email"/>
                </FormContainer>

                <ButtonSave/>
            </WrapperConfig>
        </>
    )
}