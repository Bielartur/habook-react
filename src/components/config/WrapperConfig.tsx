
type Props = {
    children: React.ReactNode
}

export const WrapperConfig = ({ children }: Props) => {
    return (
        <div className="w-full flex flex-col max-w-180 gap-4">
            { children }
        </div>
    )
}