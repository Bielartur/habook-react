import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse} from "@fortawesome/free-solid-svg-icons"
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons"

import { NavItem } from "./NavItem"
import {ProfileDropdown} from "./ProfileDropdown.tsx";

type Props = {
    onNavigate?: () => void
}

export const NavList = ({ onNavigate }: Props) => {

    return (
        <>
            <NavItem to="/" onNavigate={onNavigate}>
                <FontAwesomeIcon icon={faHouse} />
                Dashboard
            </NavItem>

            <NavItem to="/livros_concluidos/#completedBooks" onNavigate={onNavigate}>
                <FontAwesomeIcon icon={faCircleCheck} />
                Livros Concluídos
            </NavItem>

            <ProfileDropdown />
        </>
    )
}