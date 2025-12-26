import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { ButtonGradient } from "./ButtonGradient.tsx";
import { SmallLoading } from "../loadings/SmallLoading.tsx";
import { AnimateContainer } from "../animations/AnimateContainer.tsx";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    type?: "button" | "submit";
    disabled?: boolean;
    className?: React.ReactNode;
    animate?: boolean;
    delay?: number
};

export const ButtonSave = ({
    type = "button",
    disabled,
    className = "",
    animate = true,
    delay = 0,
    ...props
}: Props) => {

    const componentButtonSave = (
        <ButtonGradient
            type={type}
            disabled={disabled}
            className={`w-full mt-1 font-semibold ${className}`}
            {...props}
        >
            {disabled ? <SmallLoading /> : (
                <>
                    <FontAwesomeIcon icon={faSave} />
                    Salvar alterações
                </>
            )}
        </ButtonGradient>
    )

    if (animate)
        return (
            <AnimateContainer
                className="w-full"
                delay={delay}
            >
                {componentButtonSave}
            </AnimateContainer>
        )

    return componentButtonSave;
}