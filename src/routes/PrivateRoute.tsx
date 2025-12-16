import {useAuth} from "../hooks/useAuth.tsx";
import {Navigate, Outlet, useLocation} from "react-router";
import {SmallLoading} from "../components/shared/loadings/SmallLoading.tsx";


export function PrivateRoute() {
    const { isLogged, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <SmallLoading />; // ou um spinner bonitinho
    }

    // Se não estiver logado, manda para o login
    if (!isLogged) {
        return (
            <Navigate
                to="/conta/login"
                replace
                state={{ from: location }} // guarda pra onde o cara queria ir
            />
        );
    }

    // Se estiver logado, renderiza a rota normalmente
    return <Outlet />;
}
