import type {FC, JSX, PropsWithChildren} from "react";
import {Header} from "@/components/common/header/header";

export const MainLayout: FC<PropsWithChildren> = ({children}: PropsWithChildren): JSX.Element => {
    return (
        <html lang="uk">
            <body>
                <Header />
                <main>
                    {children}
                </main>
                <footer>
                </footer>
            </body>
        </html>
    );
}