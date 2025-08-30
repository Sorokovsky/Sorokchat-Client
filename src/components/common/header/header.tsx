"use client"
import type {FC, JSX} from "react";
import {Avatar} from "@/components/ui/avatar/avatar";
import {AVATAR_ICON, LOGO_ICON} from "@/constants/ui.constants";
import cn from "clsx";
import styles from "./header.module.sass";
import {useMenuSidebarStore} from "@/store/menu-sidebar/menu-sidebar.store";

export const Header: FC = (): JSX.Element => {
    const {toggle} = useMenuSidebarStore();
    return (
        <header className={cn(styles.header)}>
            <div className={cn(styles.container)}>
                <Avatar image={LOGO_ICON}/>
                <Avatar image={AVATAR_ICON} onClick={toggle}/>
            </div>
        </header>
    );
};