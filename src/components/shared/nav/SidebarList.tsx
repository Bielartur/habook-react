import {NavItem} from "./NavItem.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGear, faSquarePollVertical, faLock} from "@fortawesome/free-solid-svg-icons";

export const SidebarList = () => {
    return (
        <nav className="flex flex-col space-y-1 w-full">
            <NavItem to="/conta/configuracoes">
                <FontAwesomeIcon icon={faGear}/>
                Configurações
            </NavItem>

            <NavItem to="/conta/metas">
                <FontAwesomeIcon icon={faSquarePollVertical}/>
                Metas
            </NavItem>

            <NavItem to="/conta/seguranca">
                <FontAwesomeIcon icon={faLock}/>
                Segurança
            </NavItem>
        </nav>
    )
}