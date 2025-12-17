import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSave} from "@fortawesome/free-solid-svg-icons";
import {ButtonGradient} from "./ButtonGradient.tsx";
import {SmallLoading} from "../loadings/SmallLoading.tsx";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    type?: "button" | "submit";
    disabled?: boolean;
    className?: React.ReactNode;
};

export const ButtonSave = ({type = "button", disabled, className = "", ...props}: Props) => {
    return (
        <ButtonGradient type={type} disabled={disabled} className={`mt-1 font-semibold w-full ${className}`} {...props}>
            {disabled ? <SmallLoading/> : (
                <>
                    <FontAwesomeIcon icon={faSave}/>
                    Salvar alterações
                </>
            )}
        </ButtonGradient>
    )
}