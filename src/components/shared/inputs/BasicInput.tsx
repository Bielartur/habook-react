import {Label} from "./Label.tsx";
import type {IconProp} from "@fortawesome/fontawesome-svg-core";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    faIcon?: IconProp;
    className?: string;
    helpText?: string;
};

export const BasicInput = ({faIcon, label, className, required = false, helpText, ...props }: Props) => {
    return (
        <div className="flex flex-col gap-0.5 w-full">
            {label && (
                <Label faIcon={faIcon} text={label} required={required}/>
            )}
            <input
                className={`input-form ${className}`}
                {...props}
            />
            {helpText && (<small className="text-slate-500">{helpText}</small>)}
        </div>
    )
}