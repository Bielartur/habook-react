import { useEffect, useRef, useState, Activity } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { NavItemButton } from "./NavItemButton";
import { NavListDropdown } from "./NavListDropdown";

export const ProfileDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent | TouchEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, []);

    const toggle = () => setIsOpen((prev) => !prev);

    return (
        <div ref={dropdownRef} className="relative">
            <NavItemButton
                type="button"
                onClick={toggle}
                aria-haspopup="menu"
                aria-expanded={isOpen}
            >
                <FontAwesomeIcon icon={faUser} />
                <span>Perfil</span>
                <FontAwesomeIcon
                    icon={faChevronDown}
                    className="text-slate-400 text-xs"
                />
            </NavItemButton>

            <Activity mode={isOpen ? "visible" : "hidden"}>
                <div className="absolute right-0 left-0 top-0 z-150 w-28 bg-white rounded-md shadow-lg flex flex-col gap-2">
                    <NavListDropdown />
                </div>
            </Activity>
        </div>
    );
};
