import {Route, Routes} from "react-router"
import {HomeLayout} from "./layout/HomeLayout.tsx";
import {Dashboard} from "./pages/Dashboard.tsx";
import {CompletedBooks} from "./pages/CompletedBooks.tsx";


export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeLayout/>}>
                <Route index element={<Dashboard/>}/>
                <Route path="livros_concluidos/" element={<CompletedBooks/>}/>
            </Route>
        </Routes>
    )
}