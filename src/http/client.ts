import {Axios} from "axios";
import {API} from "@/constants/api.constants";
import {requestHandler} from "@/http/handlers/request.handler";
import {responseHandler} from "@/http/handlers/response.handler";

const instance: Axios = new Axios({
    baseURL: API
});

instance.interceptors.request.use(requestHandler);

instance.interceptors.response.use(responseHandler);

export const httpClient: Axios = instance;