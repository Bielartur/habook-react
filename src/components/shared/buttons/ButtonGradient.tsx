
type Props = React.ComponentProps<"button"> & {
    className?: string
}

export const ButtonGradient = ({ className = "", children, ...props }: Props) => {
    return (
        <button className={`button-gradient ${className}`} {...props}>
            { children }
        </button>
    )
}