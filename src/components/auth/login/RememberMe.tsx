import {NavLink} from "react-router";
import type {InputHTMLAttributes} from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
    inputName: string;
    label: string;
};

export const RememberMe = ({ inputName, label, ...props }: Props) => {
    return (
        <div className="w-full max-w-96 mx-auto flex justify-between items-center">
            <span className="flex items-center gap-2">
                <input
                    type="checkbox"
                    id={inputName}
                    name={inputName}
                    className="accent-accent-alt cursor-pointer"
                    {...props}
                />
                <label htmlFor={inputName} className="cursor-pointer">
                    {label}
                </label>
            </span>

            <span className="text-sm space-x-2">
                <span>Não tem conta?</span>
                <NavLink
                    to="/conta/cadastrar"
                    className="font-[600] border-accent-alt hover:border-b-2 text-gradient whitespace-nowrap"
                >
                    Crie aqui
                </NavLink>
            </span>
        </div>
    );
};
