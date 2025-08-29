import type {CreateUserPayload} from "@/contracts/user/create-user";

export type LoginUser = Required<Pick<CreateUserPayload, "email" | "password">>;