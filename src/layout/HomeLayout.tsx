import {Navbar} from "../components/layout/Navbar.tsx";
import {Outlet} from "react-router";
import {Footer} from "../components/layout/Footer.tsx";

export const HomeLayout = () => {
    return (
        <>
            <Navbar/>
            <main className="flex-1">
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}