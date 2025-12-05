
type Props = {
    children: React.ReactNode
    className?: string
}

export const ConfigContainer = ({ children, className }: Props) => {
    return (
        <div className={"flex flex-col grow gap-2 p-4 rounded-lg border border-slate-300 bg-white  " +
            "items-center justify-center border border-slate-300 " + className}
        >
            {children}
        </div>
    )
}