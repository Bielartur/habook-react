import {type InputHTMLAttributes, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash, faUser} from "@fortawesome/free-regular-svg-icons";
import {faEnvelope, faLock, faPen} from "@fortawesome/free-solid-svg-icons";

type Props = InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    inputName: string;
}

export const AuthInput = ({type = "text", inputName, label, ...props}: Props) => {
    const isPassword = type === "password";
    const [flexibleType, setFlexibleType] = useState("password");

    const resolveInputIcon = () => {
        let icon;
        if (type === "email") {
            icon = faEnvelope
        } else if (isPassword) {
            icon = faLock
        } else if (label.toLowerCase() === "nome") {
            icon = faUser
        } else {
            icon = faPen
        }

        return icon
    }

    const handleShowPassword = () => {
        setFlexibleType((prev) => prev === "password" ? "text": "password");
    }

    return (
        <div
            className="w-full max-w-96 h-fit border-2 border-accent-alt rounded-md mx-auto mt-1 relative flex justify-end">
            <div className="h-full w-8 absolute left-0 flex items-center justify-center">
                <FontAwesomeIcon icon={resolveInputIcon()}/>
            </div>

            <input className="peer p-2 ml-8 border-none bg-transparent outline-none rounded-sm w-full text-slate-800"
                   placeholder=" "
                   type={type !== "password" ? type : flexibleType}
                   {...props}
            />

            <label htmlFor={inputName} className="float-label">
                {label}
            </label>
            {isPassword && (
                <button type="button"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-600 hover:text-slate-700 cursor-pointer"
                        data-eye-toggle
                        data-eye-target-id={inputName}
                        aria-label="Mostrar/ocultar senha"
                        aria-pressed="false"
                        onClick={() => handleShowPassword()}
                >
                    <FontAwesomeIcon icon={flexibleType === "password" ? faEyeSlash : faEye} />
                </button>
            )
            }
        </div>
    )
}