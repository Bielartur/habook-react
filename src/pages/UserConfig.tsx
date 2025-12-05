import {TitleConfig} from "../components/config/TitleConfig.tsx";
import {InfoContainer} from "../components/config/InfoContainer.tsx";
import {ContainerForm} from "../components/config/ContainerForm.tsx";
import {BasicInput} from "../components/shared/inputs/BasicInput.tsx";
import {ButtonGradient} from "../components/shared/buttons/ButtonGradient.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSave} from "@fortawesome/free-solid-svg-icons";

export const UserConfig = () => {
    return (
        <div className="w-full flex grow">
            <div className="w-full mb-4">
                <TitleConfig title="Configurações" subtitle="Ajuste as suas informações do seu perfil."/>
                <div className="w-full flex flex-col max-w-180 gap-4">
                    <div className="flex flex-wrap min-w-28 gap-4">
                        <InfoContainer label="Conta criada em" info="19/10/2025"/>
                        <InfoContainer label="Último login" info="29/11/2025"/>
                    </div>

                    <ContainerForm title="Informações pessoais" subtitle="Atualize seus dados cadastrais">
                        <BasicInput label="Nome" placeholder="Digite o seu nome"/>
                        <BasicInput label="Email" placeholder="Digite o seu email"/>
                    </ContainerForm>

                    <ButtonGradient className="mt-1 font-semibold">
                        <FontAwesomeIcon icon={faSave} />
                        Salvar alterações
                    </ButtonGradient>
                </div>
            </div>
        </div>
    )
}