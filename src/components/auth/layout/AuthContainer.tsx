
type Props = {
    children: React.ReactNode
}

export const AuthContainer = ({ children }: Props) => {
    return (
        <div className="bg-white w-full h-[calc(100%-var(--footer-height))] md:w-4/5 md:h-4/5 max-w-5xl flex md:shadow-xl rounded-sm flex-col md:flex-row relative">
            { children }
        </div>

    )
}