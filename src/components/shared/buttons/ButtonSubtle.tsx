
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string
};

export const ButtonSubtle = ({children, className, ...props}: Props) => {
    return (
        <button type="reset"
                className={`button-subtle ${className}`}
                {...props}
        >
            {children}
        </button>
    )
}