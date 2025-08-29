import "./globals.sass";
import type {FC, JSX, PropsWithChildren} from "react";
import type {Metadata} from "next";
import {MainLayout} from "@/components/common/main-layout/main-layout";

export const metadata: Metadata = {
    title: {
        template: `SorokChat - %s`,
        default: "SorokChat"
    }
};

const RootLayout: FC<PropsWithChildren> = ({children}: PropsWithChildren): JSX.Element => <MainLayout>{children}</MainLayout>;

export default RootLayout;