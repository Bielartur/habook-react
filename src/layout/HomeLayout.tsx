import {Navbar} from "../components/layout/Navbar.tsx";
import {Outlet} from "react-router";
import {Footer} from "../components/layout/Footer.tsx";
import {Main} from "../components/layout/Main.tsx";
import {ScrollToHash} from "../components/shared/ScrollToHash.tsx";

export const HomeLayout = () => {
    return (
        <>
            <Navbar/>
            <Main>
                <ScrollToHash />
                <Outlet/>
            </Main>
            <Footer/>
        </>
    )
}