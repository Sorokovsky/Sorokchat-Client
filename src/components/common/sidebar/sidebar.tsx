import type {FC, JSX} from "react";
import type {ISidebar} from "@/components/common/sidebar/sidebar.props";
import cn from "clsx";
import styles from "./sidebar.module.sass";

export const Sidebar: FC<ISidebar> = ({children, isShow}: ISidebar): JSX.Element => {
    return (
        <aside className={cn(styles.sidebar, {
            [styles.show]: isShow
        })}>
            {children}
        </aside>
    );
};