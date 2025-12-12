import {Label} from "./Label.tsx";
import type {IconProp} from "@fortawesome/fontawesome-svg-core";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
    ref?: React.Ref<HTMLInputElement>;
    label?: string;
    faIcon?: IconProp;
    className?: string;
    classNameContainer?: string;
    helpText?: string;
};

export const BasicInput = ({ref, faIcon, label, className, classNameContainer, required = false, helpText, ...props }: Props) => {
    return (
        <div className={`flex flex-col gap-0.5 w-full ${classNameContainer}`}>
            {label && (
                <Label faIcon={faIcon} text={label} required={required}/>
            )}
            <input
                className={`input-form ${className}`}
                ref={ref}
                {...props}
            />
            {helpText && (<small className="text-slate-500">{helpText}</small>)}
        </div>
    )
}