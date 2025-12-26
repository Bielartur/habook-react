import { NavLink, useNavigate } from "react-router"

type Props = {
    children: React.ReactNode
    className?: string
    to: string
    onNavigate?: () => void
}

export const NavItem = ({ children, to = "", className = "", onNavigate }: Props) => {
    const navigate = useNavigate()

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (!onNavigate) return;

        e.preventDefault()
        onNavigate()

        console.log("Espera a navbar começar a fechar")
        setTimeout(() => {
            navigate(to)
        }, 150)
    }

    return (
        <NavLink
            onClick={handleClick}
            to={to}
            className={({ isActive }) =>
                `nav-item ${isActive ? "link-active" : ""} ${className} `
            }
        >
            {({ isActive }) => (
                <span
                    className={
                        "flex gap-2 items-center justify-center " +
                        (isActive ? "text-gradient" : "")
                    }
                >
                    {children}
                </span>
            )}

        </NavLink>
    )
}