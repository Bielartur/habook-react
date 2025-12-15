import {AuthInput} from "../../shared/inputs/AuthInput.tsx";
import {ButtonAuth} from "../../shared/buttons/ButtonAuth.tsx";
import {RememberMe} from "../login/RememberMe.tsx";

type Props = React.FormHTMLAttributes<HTMLFormElement> & {
    title: string
    subtitle: string
    submitLabel?: string
    formFields: Array<{
        label: string
        name: string
        type?: string
    }>
    rememberMe?: boolean
}

export const AuthForm = ({title, subtitle, submitLabel = "Enviar", rememberMe, formFields, ...props}: Props) => {

    return (
        <form className="w-full flex flex-col justify-center gap-3 lg:gap-4.5" {...props}>
            <legend>
                <span className="text-2xl text-gradient font-semibold">
                    {title}
                </span>
                <p className="text-sm font-semibold">{subtitle}</p>
            </legend>

            <div className="flex flex-col gap-3">
                {formFields.map((field) => (
                    <AuthInput
                        key={`form-input-${field.name}`}
                        label={field.label}
                        inputName={field.name}
                        type={field.type}
                        autoComplete={field.type === "email" ? "email" : undefined}
                    />
                ))}
                {rememberMe && (
                    <RememberMe inputName="remember_me" label="Lembrar de mim"/>
                )}
            </div>


            <ButtonAuth type="submit">
                {submitLabel}
            </ButtonAuth>
        </form>
    )
}