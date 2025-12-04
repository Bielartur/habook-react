
type Props = {
    icon: React.ReactNode
    text: string
}

export const TextoMotivador = ({ icon, text }: Props) => {
    return (
        <div className="w-full text-accent text-sm space-x-1">
            {icon}
            <span className="font-semibold">{ text }</span>
        </div>
    )
}