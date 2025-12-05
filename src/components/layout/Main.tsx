
type Props = {
    children?: React.ReactNode;
}

export const Main = ({ children }: Props) => {
    return (
        <main className="flex-1">
            {children}
        </main>
    )
}