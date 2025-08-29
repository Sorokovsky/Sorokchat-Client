"use client"
import type {QueryClient} from "@tanstack/react-query";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {GET_PROFILE_KEY, LOGIN_KEY} from "@/constants/queries.constants";
import {authenticationService} from "@/services/authentication.service";
import {RETRY_COUNT} from "@/constants/api.constants";

export const useLogin = () => {
    const client: QueryClient = useQueryClient();
    return useMutation({
        mutationKey: [LOGIN_KEY],
        mutationFn: authenticationService.login,
        retry: RETRY_COUNT,
        async onSettled() {
            await client.invalidateQueries({queryKey: [GET_PROFILE_KEY]});
        }
    });
};