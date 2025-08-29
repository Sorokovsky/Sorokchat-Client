import type {NextConfig} from "next";
import type {Rewrite} from "next/dist/lib/load-custom-routes";
import {API, SERVER_URL} from "@/constants/api.constants";

const nextConfig: NextConfig = {
    async rewrites(): Promise<Rewrite[]> {
        return [
            {
                source: `${API}/:path*`,
                destination: `${SERVER_URL}/:path*`
            }
        ]
    }
};

export default nextConfig;
