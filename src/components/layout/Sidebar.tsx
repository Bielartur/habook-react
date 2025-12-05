import {NavItem} from "../shared/nav/NavItem.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGear, faSquarePollVertical, faLock} from "@fortawesome/free-solid-svg-icons";

export const Sidebar = () => {
    return (
        <aside className="flex flex-col grow min-w-48 w-full md:w-64 text-lg md:text-base">
            <NavItem to="/conta/configuracoes">
                <FontAwesomeIcon icon={faGear} />
                Configurações
            </NavItem>

            <NavItem to="conta/metas">
                <FontAwesomeIcon icon={faSquarePollVertical} />
                Metas
            </NavItem>

            <NavItem to="conta/seguranca">
                <FontAwesomeIcon icon={faLock} />
                Segurança
            </NavItem>

        </aside>
    )
}