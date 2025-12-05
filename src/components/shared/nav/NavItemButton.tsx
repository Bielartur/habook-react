type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
};

export const NavItemButton = ({ children, className = "", ...props }: Props) => {
    return (
        <button
            className={`nav-item space-x-1.5 cursor-pointer relative ${className}`}
            {...props}
        >
            { children }
        </button>
    )
}