import type {QueryClient} from "@tanstack/react-query";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {authenticationService} from "@/services/authentication.service";
import {GET_PROFILE_KEY, LOGOUT_KEY} from "@/constants/queries.constants";
import {RETRY_COUNT} from "@/constants/api.constants";

export const useLogout = () => {
    const client: QueryClient = useQueryClient();
    return useMutation({
        mutationFn: authenticationService.logout,
        mutationKey: [LOGOUT_KEY],
        retry: RETRY_COUNT,
        async onSettled() {
            await client.invalidateQueries({queryKey: [GET_PROFILE_KEY]});
        }
    });
};