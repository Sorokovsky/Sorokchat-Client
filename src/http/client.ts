import {Axios} from "axios";
import {ACCESS_TOKEN_KEY, API, AUTHORIZATION_HEADER} from "@/constants/api.constants";

const instance: Axios = new Axios({
    baseURL: API
});

instance.interceptors.request.use((request) => {
    const accessToken: string = localStorage.getItem(ACCESS_TOKEN_KEY) ?? "";
    request.headers.set(AUTHORIZATION_HEADER, `Bearer ${accessToken}`, true);
    return request;
});

instance.interceptors.response.use(response => {
    const authorization: string = response.headers[AUTHORIZATION_HEADER]?.toString() || "";
    const parts: string[] = authorization.split(" ");
    let token: string = "";
    if(parts.length === 2) token = parts[1];
    localStorage.setItem(ACCESS_TOKEN_KEY, token);
    return response;
});

export const httpClient: Axios = instance;