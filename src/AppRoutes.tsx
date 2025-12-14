import {Route, Routes} from "react-router"
import {HomeLayout} from "./layout/HomeLayout.tsx";
import {Dashboard} from "./pages/Dashboard.tsx";
import {CompletedBooks} from "./pages/CompletedBooks.tsx";
import {UserConfig} from "./pages/UserConfig.tsx";
import {ConfigLayout} from "./layout/ConfigLayout.tsx";
import {GoalsConfig} from "./pages/GoalsConfig.tsx";
import {SecurityConfig} from "./pages/SecurityConfig.tsx";


export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeLayout/>}>
                <Route index element={<Dashboard/>}/>
                <Route path="livros_concluidos/" element={<CompletedBooks/>}/>
            </Route>

            <Route path="/conta" element={<ConfigLayout/>}>
                <Route path="configuracoes/" element={<UserConfig/>}/>
                <Route path="metas/" element={<GoalsConfig/>}/>
                <Route path="seguranca/" element={<SecurityConfig/>}/>
            </Route>
        </Routes>
    )
}