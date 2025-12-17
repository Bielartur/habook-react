import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSave} from "@fortawesome/free-solid-svg-icons";
import {ButtonGradient} from "./ButtonGradient.tsx";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    type?: "button" | "submit";
    className?: React.ReactNode;
};

export const ButtonSave = ({ type = "submit", className = "", ...props }: Props) => {
    return (
        <ButtonGradient type={type} className={`mt-1 font-semibold w-full ${className}`} {...props}>
            <FontAwesomeIcon icon={faSave} />
            Salvar alterações
        </ButtonGradient>
    )
}