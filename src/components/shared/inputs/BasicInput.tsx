import {Label} from "./Label.tsx";
import type {IconProp} from "@fortawesome/fontawesome-svg-core";
import {forwardRef} from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string
    faIcon?: IconProp
    className?: string
    classNameContainer?: string
    helpText?: string
}

export const BasicInput = forwardRef<HTMLInputElement, Props>(
    (
        {
            faIcon,
            label,
            className = "",
            classNameContainer = "",
            required = false,
            helpText,
            ...props
        },
        ref
    ) => {
        return (
            <div className={`flex flex-col gap-0.5 w-full ${classNameContainer}`}>
                {label && (
                    <Label faIcon={faIcon} text={label} required={required} />
                )}

                <input
                    ref={ref}
                    className={`input-form ${className}`}
                    {...props}
                />

                {helpText && (
                    <small className="text-slate-500">{helpText}</small>
                )}
            </div>
        )
    }
)