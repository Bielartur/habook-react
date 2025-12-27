import {TitleConfig} from "../components/config/TitleConfig.tsx";
import {WrapperConfig} from "../components/config/WrapperConfig.tsx";
import {GoalsForm} from "../components/config/GoalsForm.tsx"
import {FormContainer} from "../components/config/FormContainer.tsx";
import {ButtonSave} from "../components/shared/buttons/ButtonSave.tsx";
import {useState} from "react";

export const GoalsConfig = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)

    return (
        <>
            <TitleConfig title="Metas" subtitle="Ajuste seus objetivos na sua jornada de leitura"/>
            <WrapperConfig>
                <FormContainer
                    title="Defina suas metas de páginas"
                    subtitle="Configure suas metas anuais e mensais de leitura"
                    delay={0.06}
                >
                    <GoalsForm id={"goals-form-modal"}
                               onSubmittingChange={setIsSubmitting}
                    />
                </ FormContainer>
                <ButtonSave delay={0.12} form={"goals-form-modal"} type={"submit"} disabled={isSubmitting}/>
            </WrapperConfig>
        </>
    )
}