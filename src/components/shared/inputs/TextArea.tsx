import {Label} from "./Label.tsx";
import type {IconProp} from "@fortawesome/fontawesome-svg-core";
import {forwardRef} from "react";

type Props = React.InputHTMLAttributes<HTMLTextAreaElement> & {
    label?: string
    faIcon?: IconProp
    className?: string
    classNameContainer?: string
    helpText?: string
    value?: string
    maxLength?: number
}

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(
    (
        {
            faIcon,
            label,
            className = "",
            classNameContainer = "",
            required = false,
            helpText,
            value,
            maxLength,
            ...props
        },
        ref
    ) => {
        return (
            <div className={`flex flex-col gap-0.5 w-full ${classNameContainer}`}>
                {label && (
                    <Label faIcon={faIcon} text={label} required={required} />
                )}

                <textarea
                    ref={ref}
                    maxLength={maxLength}
                    className={`input-form max-h-32 min-h-16 ${className}`}
                    rows={3}
                    {...props}
                />

                <div className="flex justify-between">
                    {helpText && (
                        <small className="text-slate-500">
                            {helpText}
                        </small>
                    )}
                    <small className="text-slate-500">
                        {value?.length || 0} / {maxLength}
                    </small>
                </div>
            </div>
        )
    }
)