import {Label} from "./Label.tsx";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
    type?: string;
    label?: string;
    className?: string;
};

export const BasicInput = ({ label, className, type = "text", ...props }: Props) => {
    return (
        <div className="flex flex-col gap-0.5 w-full">
            {label && (<Label text={label} />)}
            <input
                type={type}
                className={`input-form ${className}`}
                {...props}
            />
        </div>
    )
}