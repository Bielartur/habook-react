type Props = {
    text: string,
    children: React.ReactNode
}

export const Subtitle = ({ text, children }: Props) => {
    return (
        <div className="flex items-center justify-between gap-4 mb-2 w-full">
            <h2 className="text-2xl font-bold text-slate-800">
                { text }
            </h2>
            { children }
        </div>
    )
}