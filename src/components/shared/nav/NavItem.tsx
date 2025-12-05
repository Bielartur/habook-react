import { NavLink } from "react-router"

type Props = {
    children: React.ReactNode
    className?: string
    to: string
}

export const NavItem = ({ children, to = "", className = "" }: Props) => {
    return (
        <NavLink
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