
type Props = React.ComponentPropsWithoutRef<"button"> & {
    children: React.ReactNode;
};

export const ButtonAuth = ({ children, ...props }: Props) => {
    return (
        <button className="button-auth" {...props}>
            {children}
        </button>
    );
};
