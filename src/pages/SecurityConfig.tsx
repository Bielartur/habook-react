import {TitleConfig} from "../components/config/TitleConfig.tsx";
import {FormContainer} from "../components/config/FormContainer.tsx";
import {ButtonSave} from "../components/shared/buttons/ButtonSave.tsx";
import {WrapperConfig} from "../components/config/WrapperConfig.tsx";
import {ButtonGradient} from "../components/shared/buttons/ButtonGradient.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRefresh} from "@fortawesome/free-solid-svg-icons";
import {Lock} from "lucide-react";
import {PasswordInput} from "../components/shared/inputs/PasswordInput.tsx";


export const SecurityConfig = () => {
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
            <TitleConfig title="Segurança" subtitle="Gerencie a segurança da sua conta"/>
            <WrapperConfig>
                <FormContainer title="Alterar senha" subtitle="Atualize sua senha regularmente para maior segurança">
                    <PasswordInput label="Senha antiga" placeholder="Digite o sua senha atual"/>
                    <PasswordInput label="Senha nova" placeholder="Digite sua nova senha"/>
                    <PasswordInput label="Confirmação da nova senha" placeholder="Confirme sua nova senha"/>
                    <ButtonSave className="mt-3"/>
                </FormContainer>

                <FormContainer title="Chave de acesso da API" subtitle="Atualizar chave de acesso">
                    <div className="py-6 px-2 pt-0 space-y-4 w-full">
                        <div className="p-4 bg-slate-100 rounded-lg">
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center 
                            ${hasToken ? "bg-accent/10 text-accent" : "bg-slate-200 text-slate-700"}`}
                                >
                                    <Lock size={20}/>
                                </div>
                                <div>
                                    {textToken}
                                </div>
                            </div>
                        </div>
                        <ButtonGradient type="button">
                            <FontAwesomeIcon icon={faRefresh}/>
                            Gerar Nova Chave
                        </ButtonGradient>
                    </div>
                </FormContainer>
            </WrapperConfig>
        </>
    )
}