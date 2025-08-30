import type {MenuSidebar} from "@/store/menu-sidebar/menu-sidebar.type";
import {create} from "zustand"

export const useMenuSidebarStore = create<MenuSidebar>((set, get) => {
    return {
        isOpen: false,
        open: () => set({isOpen: true}),
        close: () => set({isOpen: false}),
        toggle() {
            const {isOpen, open, close} = get();
            if (isOpen) close();
            else open();
        },
    };
});