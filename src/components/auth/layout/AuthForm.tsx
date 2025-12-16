import {ButtonAuth} from "../../shared/buttons/ButtonAuth.tsx";

type Props = React.FormHTMLAttributes<HTMLFormElement> & {
    title: string
    subtitle: string
    submitLabel?: string
    isSubmiting?: boolean
    children?: React.ReactNode
}

export const AuthForm = ({title, subtitle, submitLabel = "Enviar", isSubmiting, children, ...props}: Props) => {

    return (
        <form className="w-full flex flex-col justify-center gap-3 lg:gap-4.5" {...props}>
            <legend>
                <span className="text-2xl text-gradient font-semibold">
                    {title}
                </span>
                <p className="text-sm font-semibold">{subtitle}</p>
            </legend>

            <div className="flex flex-col gap-3 max-w-96 w-full mx-auto">
                { children }
            </div>


            <ButtonAuth type="submit" disabled={isSubmiting}>
                {submitLabel}
            </ButtonAuth>
        </form>
    )
}