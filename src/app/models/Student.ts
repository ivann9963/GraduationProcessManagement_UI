import { User } from "./User";

export type Student = User & {
    facultyNumber: string;
}
