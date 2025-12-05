import {Navbar} from "../components/layout/Navbar.tsx";
import {Outlet} from "react-router";
import {Footer} from "../components/layout/Footer.tsx";
import {Main} from "../components/layout/Main.tsx";
import {Sidebar} from "../components/layout/Sidebar.tsx";
import {Section} from "../components/layout/Section.tsx";

export const ConfigLayout = () => {
    return (
        <>
            <Navbar/>
            <Main>
                <Section className={"flex-row"}>
                    <Sidebar/>
                    <Outlet/>
                </Section>
            </Main>
            <Footer/>
        </>
    )
}