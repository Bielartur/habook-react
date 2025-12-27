import {Label} from "./Label.tsx";
import type {IconProp} from "@fortawesome/fontawesome-svg-core";
import {forwardRef} from "react";

type Props = React.SelectHTMLAttributes<HTMLSelectElement> & {
    label: string
    faIcon?: IconProp
    required?: boolean
    options: { id: number; nome: string }[]
}

export const SelectOptions = forwardRef<HTMLSelectElement, Props>(
    ({ faIcon, label, required = false, options, className = "", ...selectProps }, ref) => {
        return (
            <div className="flex flex-col gap-0.5 w-full">
                {label && <Label faIcon={faIcon} text={label} required={required} />}

                <select
                    ref={ref}
                    className={`simple-input py-2! text-slate-800 ${className}`}
                    {...selectProps}
                >
                    <option key={`category-option-default`} value={""}>
                        Selecione...
                    </option>
                    {options.map(option => (
                        <option key={`category-option-${option.id}`} value={option.id}>
                            {option.nome}
                        </option>
                    ))}
                </select>
            </div>
        )
    }
)