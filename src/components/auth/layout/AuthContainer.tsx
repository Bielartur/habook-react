
type Props = {
    children: React.ReactNode
}

export const AuthContainer = ({ children }: Props) => {
    return (
        <div className="bg-white w-full min-h-[calc(100%-var(--footer-height))] h-full lg:w-4/5 lg:h-4/5 max-w-5xl flex lg:shadow-xl rounded-sm flex-col lg:flex-row relative">
            { children }
        </div>

    )
}