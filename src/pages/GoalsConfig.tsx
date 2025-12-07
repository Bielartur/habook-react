import {TitleConfig} from "../components/config/TitleConfig.tsx";
import {FormContainer} from "../components/config/FormContainer.tsx";
import {WrapperConfig} from "../components/config/WrapperConfig.tsx";
import {ButtonSave} from "../components/shared/buttons/ButtonSave.tsx";
import {SelectRow} from "../components/shared/inputs/SelectRow.tsx";

export const GoalsConfig = () => {
    return (
        <>
            <TitleConfig title="Metas" subtitle="Ajuste seus objetivos na sua jornada de leitura"/>
            <WrapperConfig>
                <FormContainer
                    title="Defina suas metas de páginas"
                    subtitle="Configure suas metas anuais e mensais de leitura"
                >
                    <SelectRow />
                </FormContainer>

                <ButtonSave/>
            </WrapperConfig>
        </>
    )
}