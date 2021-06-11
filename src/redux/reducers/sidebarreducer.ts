import { SIDEBAR_OPEN } from "../types";
import { ToggleSidebarAction, TOGGLE_SIDEBAR } from "../actions/sidebaraction";

const sideBarReducer = (
    state: SIDEBAR_OPEN = false,
    action: ToggleSidebarAction
) => {
    switch (action.type) {
        case TOGGLE_SIDEBAR:
            return !state;
        default:
            return state;
    }
};

export default sideBarReducer;
