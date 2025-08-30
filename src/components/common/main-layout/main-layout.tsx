"use client"
import type {FC, JSX, PropsWithChildren} from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Header} from "@/components/common/header/header";
import {Sidebar} from "@/components/common/sidebar/sidebar";
import {useMenuSidebarStore} from "@/store/menu-sidebar/menu-sidebar.store";

const client: QueryClient = new QueryClient();

export const MainLayout: FC<PropsWithChildren> = ({children}: PropsWithChildren): JSX.Element => {
    const {isOpen} = useMenuSidebarStore();
    return (
        <QueryClientProvider client={client}>
            <html lang="uk">
            <body>
            <Header/>
            <div className="page">
                <main>
                    {children}
                </main>
                <Sidebar isShow={isOpen}>
                    test
                </Sidebar>
                <footer>
                </footer>
            </div>
            </body>
            </html>
        </QueryClientProvider>
    );
}