import type {Metadata, NextPage} from "next";
import type {JSX} from "react";
import {IndexPage} from "@/components/pages/index";

export const metadata: Metadata = {
    title: `Sorokchat - Головна`,
};

const Index: NextPage = (): JSX.Element => <IndexPage />

export default Index;