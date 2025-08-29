import {ACCESS_TOKEN_KEY, AUTHORIZATION_HEADER, BEARER_PREFIX} from "@/constants/api.constants";
import type {InternalAxiosRequestConfig} from "axios";

export const requestHandler = (request: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const accessToken: string = localStorage.getItem(ACCESS_TOKEN_KEY) || "";
    request.headers.set(AUTHORIZATION_HEADER, `${BEARER_PREFIX} ${accessToken}`, true);
    return request;
};