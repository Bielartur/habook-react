import {Label} from "./Label.tsx";
import type {IconProp} from "@fortawesome/fontawesome-svg-core";

type Props = {
    label: string;
    faIcon?: IconProp;
    required?: boolean;
    options: { value: number, label: string }[],
}

export const SelectOptions = ({faIcon, label, required = false, options}: Props) => {
    return (
        <div className="flex flex-col gap-0.5 w-full">
            {label && (
                <Label faIcon={faIcon} text={label} required={required}/>
            )}
            <select className="simple-input py-2! text-slate-800">
                {options.map((option) => (
                    <option key={`category-option-${option.value}`} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    )
}