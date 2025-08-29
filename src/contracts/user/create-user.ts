import type {GetUserPayload} from "@/contracts/user/get-user";

export type CreateUserPayload = Required<Pick<GetUserPayload, "email">> &
    Partial<Omit<GetUserPayload, "id" | "createdAt" | "updatedAt" | "email">> &
    {
        password: string;
    };