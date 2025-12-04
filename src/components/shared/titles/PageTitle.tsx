
type Props = {
    title: string
    subtitle: string
    className?: string
}

export const PageTitle = ({ title, subtitle, className = "" }: Props) => {
    return (
        <div className={`text-center my-2 fade-in ${className}`}>
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