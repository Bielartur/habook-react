import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSave} from "@fortawesome/free-solid-svg-icons";
import {ButtonGradient} from "./ButtonGradient.tsx";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: React.ReactNode;
};

export const ButtonSave = ({ className = "", ...props }: Props) => {
    return (
        <ButtonGradient className={`mt-1 font-semibold w-full ${className}`} {...props}>
            <FontAwesomeIcon icon={faSave} />
            Salvar alterações
        </ButtonGradient>
    )
}