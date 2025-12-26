import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faX } from "@fortawesome/free-solid-svg-icons"
import { faBook } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router"
import { NavList } from "../shared/nav/NavList"
import { useState } from "react";


export const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <header
            className={`sticky min-h-(--navbar-height) top-0 z-100 flex flex-col items-center justify-center border-b border-slate-200 ${open ? "bg-white/80" : "bg-white"} backdrop-blur px-3 font-semibold`}
        >
            <div className="w-full flex items-center justify-between h-(--navbar-height) max-w-6xl">

                {/* Brand */}
                <div className="flex gap-3 items-center">
                    <Link to="/" className="bg-accent/25 p-2 rounded-lg">
                        <FontAwesomeIcon icon={faBook} className="text-3xl text-accent mt-[0.2rem]" />
                    </Link>
                    <span className="flex flex-col">
                        <h1 className="text-[1.65rem] leading-7 font-semibold text-gradient">Habook</h1>
                        <p className="text-sm text-slate-600">Sua jornada literária</p>
                    </span>
                </div>

                {/* Botão hamburguer (mostra até md) */}
                <button
                    onClick={() => {
                        setOpen((prev) => !prev)
                    }}
                    className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-600 hover:bg-slate-200 hover:text-slate-700"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                    type="button"
                >
                    <span className="sr-only">Abrir menu</span>
                    <FontAwesomeIcon icon={open ? faX : faBars} className="text-xl cursor-pointer" />
                </button>

                {/* Nav desktop (a partir de md) */}
                <nav className="hidden md:flex md:gap-2 lg:gap-4">
                    <NavList />
                </nav>
            </div>

            {/* Menu mobile (dropdown) */}
            <div
                className={[
                    "md:hidden w-full max-w-208 mx-auto px-3 pb-3",
                    "overflow-hidden",
                    "transition-[height,opacity] duration-300 ease-out",
                    open ? "h-auto opacity-100" : "h-0 opacity-0 pointer-events-none",
                ].join(" ")}
            >
                <nav className="mt-2 max-w-64 mx-auto flex flex-col gap-1 rounded-lg border border-slate-200 bg-white/90 p-2 shadow-sm">
                    <NavList onNavigate={() => setOpen(false)} />
                </nav>
            </div>
        </header>
    )
}