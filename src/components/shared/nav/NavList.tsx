import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faUser } from "@fortawesome/free-solid-svg-icons"
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons"

import { NavItem } from "./NavItem"


export const NavList = () => {
    return (
        <>
            <NavItem to="/">
                <FontAwesomeIcon icon={faHouse} />
                Dashboard
            </NavItem>

            <NavItem to="/livros_concluidos">
                <FontAwesomeIcon icon={faCircleCheck} />
                Livros Concluídos
            </NavItem>
            
            <NavItem to="/">
                <FontAwesomeIcon icon={faUser} />
                Perfil
            </NavItem></>
    )
}