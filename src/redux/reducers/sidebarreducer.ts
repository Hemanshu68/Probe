import { Sidebar } from "../types/Sidebar";

interface SidebarAction {
    type: string;
}

const sideBarReducer = (state: boolean = false, action: SidebarAction) => {
    switch (action.type) {
        case Sidebar.SHOW:
            return true;
        case Sidebar.HIDE:
            return false;
        default:
            return state;
    }
};

export default sideBarReducer;
