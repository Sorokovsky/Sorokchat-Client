"use client"
import {useQuery} from "@tanstack/react-query";
import {GET_PROFILE_KEY} from "@/constants/queries.constants";
import {authenticationService} from "@/services/authentication.service";
import {RETRY_COUNT} from "@/constants/api.constants";

export const useGetProfile = () => {
    return useQuery({
        queryKey: [GET_PROFILE_KEY],
        queryFn: authenticationService.getProfile,
        retry: RETRY_COUNT
    });
};