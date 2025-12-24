import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse} from "@fortawesome/free-solid-svg-icons"
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons"

import { NavItem } from "./NavItem"
import {ProfileDropdown} from "./ProfileDropdown.tsx";


export const NavList = () => {

    return (
        <>
            <NavItem to="/">
                <FontAwesomeIcon icon={faHouse} />
                Dashboard
            </NavItem>

            <NavItem to="/livros_concluidos/#completedBooks">
                <FontAwesomeIcon icon={faCircleCheck} />
                Livros Concluídos
            </NavItem>

            <ProfileDropdown />
        </>
    )
}