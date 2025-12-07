import {SidebarList} from "../shared/nav/SidebarList.tsx";


export const Sidebar = () => {
    return (
        <aside className="flex grow min-w-48 w-full md:w-64 text-lg md:text-base">

            <SidebarList />

        </aside>
    )
}