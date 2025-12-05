
type Props = {
    children: React.ReactNode
    className?: string
}

export const Section = ({ children, className = "" }: Props) => {
    return (
        <section className={"relative py-6 w-full max-w-6xl mx-auto flex flex-col justify-center gap-4 px-4 xl:px-0 " + className}>
            {children}
        </section>
    )
}