
type Props = {
    className?: string
}

export const Footer = ({ className }: Props) => {
    const currentYear = new Date().getFullYear()

    return (
        <footer
            className={"w-full text-slate-600 font-[500] px-2 h-(--footer-height) flex items-center justify-center text-center " + className}>
            &copy; {currentYear} Gabriel Canto. Todos os direitos reservados.
        </footer>
    )
}