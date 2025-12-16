import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGear, faRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import {NavItem} from "./NavItem.tsx";
import {NavItemButton} from "./NavItemButton.tsx";
import {useAuth} from "../../../hooks/useAuth.tsx";

export const NavListDropdown = () => {
    const { handleLogout } = useAuth();

    return (
        <div className="absolute right-0 left-0 top-10 z-150 mt-2 w-28 bg-white rounded-md shadow-lg flex flex-col gap-2">

            <NavItem to="/conta/configuracoes">
                <FontAwesomeIcon icon={faGear} />
                Conta
            </NavItem>

            <NavItemButton onClick={handleLogout}>
                <FontAwesomeIcon icon={faRightFromBracket} />
                Sair
            </NavItemButton>
        </div>
    )
}