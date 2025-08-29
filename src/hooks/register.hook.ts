"use client"
import type {QueryClient} from "@tanstack/react-query";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {GET_PROFILE_KEY, REGISTER_KEY} from "@/constants/queries.constants";
import {authenticationService} from "@/services/authentication.service";
import {RETRY_COUNT} from "@/constants/api.constants";

export const useRegister = () => {
    const client: QueryClient = useQueryClient();
    return useMutation({
        mutationKey: [REGISTER_KEY],
        mutationFn: authenticationService.register,
        retry: RETRY_COUNT,
        async onSettled() {
            await client.invalidateQueries({queryKey: [GET_PROFILE_KEY]});
        }
    });
};