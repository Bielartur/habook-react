
type Props = {
    message: string | undefined;
}

export function ErrorMessage({ message }: Props) {
    return (
        <span className="text-xs text-red-500">{message}</span>
    )
}
