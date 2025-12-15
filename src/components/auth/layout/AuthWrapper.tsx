
type Props = {
    children: React.ReactNode;
    className?: string;
}

export const AuthWrapper = ({ children, className }: Props) => {
    return (
        <header className={`absolute h-full w-full flex items-center justify-center ${className}`}>
            { children }
        </header>
    )
}