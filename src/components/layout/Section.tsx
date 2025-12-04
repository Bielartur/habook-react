
type Props = {
    children: React.ReactNode
}

export const Section = ({ children }: Props) => {
    return (
        <section className="py-6 w-full max-w-6xl mx-auto flex flex-col items-center justify-center gap-4 px-4 xl:px-0">
            {children}
        </section>
    )
}