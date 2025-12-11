import {Label} from "./Label.tsx";
import type {IconProp} from "@fortawesome/fontawesome-svg-core";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
    type?: string;
    label?: string;
    faIcon?: IconProp;
    className?: string;
};

export const BasicInput = ({faIcon, label, className, type = "text", required = false, ...props }: Props) => {
    return (
        <div className="flex flex-col gap-0.5 w-full">
            {label && (
                <Label faIcon={faIcon} text={label} required={required}/>
            )}
            <input
                type={type}
                className={`input-form ${className}`}
                {...props}
            />
        </div>
    )
}