import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSave} from "@fortawesome/free-solid-svg-icons";
import {ButtonGradient} from "./ButtonGradient.tsx";


export const ButtonSave = () => {
    return (
        <ButtonGradient className="mt-1 font-semibold">
            <FontAwesomeIcon icon={faSave} />
            Salvar alterações
        </ButtonGradient>
    )
}