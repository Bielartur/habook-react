
type Props = {
    title: string
    subtitle: string
    className?: string
    id?: string
}

export const PageTitle = ({id, title, subtitle, className = "" }: Props) => {
    return (
        <div id={id ?? undefined} className={`text-center my-2 animate-fade-in ${className}`}>
            <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    <span className="text-gradient w-fit">{ title }</span>
                </h1>
            </div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                { subtitle }
            </p>
        </div>
    )
}