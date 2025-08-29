"use client"
import type {FC, JSX, PropsWithChildren} from "react";
import {Header} from "@/components/common/header/header";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const client: QueryClient = new QueryClient();

export const MainLayout: FC<PropsWithChildren> = ({children}: PropsWithChildren): JSX.Element => {
    return (
        <QueryClientProvider client={client}>
            <html lang="uk">
            <body>
            <Header/>
            <main>
                {children}
            </main>
            <footer>
            </footer>
            </body>
            </html>
        </QueryClientProvider>
    );
}