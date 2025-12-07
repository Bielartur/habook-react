import {Label} from "./Label.tsx";
import {faEyeSlash, faEye} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    className?: string;
};

export const PasswordInput = ({label, className, ...props}: Props) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="flex flex-col gap-0.5 w-full">
            {label && (<Label text={label}/>)}
            <div className="relative">
                <input
                    type={isVisible ? "text" : "password"}
                    className={`input-form ${className}`}
                    {...props}
                />
                <button type="button"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-600 hover:text-slate-700 cursor-pointer"
                        aria-label="Mostrar/ocultar senha"
                        aria-pressed="false"
                        onClick={() => {setIsVisible((prev) => !prev)}}
                >
                    {isVisible ? (<FontAwesomeIcon icon={faEye}/>) : <FontAwesomeIcon icon={faEyeSlash}/>}

                </button>
            </div>
        </div>
    )
}