import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { faBook } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router"
import { NavList } from "../shared/nav/NavList"


export const Navbar = () => {
    return (
        <header
            className="sticky min-h-(--navbar-height) top-0 z-100 flex items-center justify-center border-b border-slate-200 bg-white/80 backdrop-blur px-3 font-semibold transition ease-in-out"
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
                    id="nav-toggle"
                    className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-600 hover:bg-slate-200 hover:text-slate-700"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                    type="button"
                >
                    <span className="sr-only">Abrir menu</span>
                    <FontAwesomeIcon icon={faBars} className="text-xl cursor-pointer" />
                </button>

                {/* Nav desktop (a partir de md) */}
                <nav className="hidden md:flex md:gap-2 lg:gap-4">
                    <NavList />
                </nav>
            </div>

            {/* Menu mobile (dropdown) */}
            <div id="mobile-menu" className="md:hidden w-full max-w-208 mx-auto px-3 pb-3 hidden">
                <nav className="mt-2 flex flex-col gap-1 rounded-lg border border-slate-200 bg-white/90 p-2 shadow-sm">

                </nav>
            </div>
        </header>
    )
}