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
                `py-2 px-3 rounded-lg h-fit flex justify-center items-center transition-colors duration-300 ${className} ` +
                (isActive
                    ? "link-active"
                    : "text-slate-600 hover:bg-slate-200 hover:text-slate-700")
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