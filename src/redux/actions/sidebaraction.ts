export const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";

export interface ToggleSidebarAction {
    readonly type: typeof TOGGLE_SIDEBAR;
}

export const toggleSidebar = (): ToggleSidebarAction => ({
    type: TOGGLE_SIDEBAR,
});
