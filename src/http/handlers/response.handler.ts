import {ACCESS_TOKEN_KEY, AUTHORIZATION_HEADER} from "@/constants/api.constants";
import type {AxiosResponse} from "axios";

export const responseHandler = (response: AxiosResponse): AxiosResponse => {
    const authorization: string = response.headers[AUTHORIZATION_HEADER]?.toString() || "";
    const parts: string[] = authorization.split(" ");
    let token: string = "";
    if (parts.length === 2) token = parts[1];
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
    return response;
}