import type {GetUserPayload} from "@/contracts/user/get-user";
import {httpClient} from "@/http/client";
import {GET_PROFILE_URL, LOGIN_URL, LOGOUT_URL, REGISTER_URL} from "@/constants/api.constants";
import type {AxiosResponse} from "axios";
import type {CreateUserPayload} from "@/contracts/user/create-user";
import type {LoginUser} from "@/contracts/user/login-user";

class AuthenticationService {
    public async getProfile(): Promise<GetUserPayload> {
        const response: AxiosResponse<GetUserPayload> = await httpClient.get<GetUserPayload>(GET_PROFILE_URL);
        return response.data;
    }

    public async register(createPayload: CreateUserPayload): Promise<GetUserPayload> {
        const response: AxiosResponse<GetUserPayload> = await httpClient.post<GetUserPayload>(REGISTER_URL, {body: createPayload});
        return response.data;
    }

    public async login(loginPayload: LoginUser): Promise<GetUserPayload> {
        const response: AxiosResponse<GetUserPayload> = await httpClient.put<GetUserPayload>(LOGIN_URL, {
            body: loginPayload
        });
        return response.data;
    }

    public async logout(): Promise<void> {
        return await httpClient.delete(LOGOUT_URL);
    }
}

export const authenticationService = new AuthenticationService();