import { User } from "./User";

export type Teacher = User & {
    position: TeacherPosition;
}

export enum TeacherPosition {
    ASSISTANT = "ASSISTANT",
    SENIOR_ASSISTANT = "SENIOR_ASSISTANT",
    ASSOCIATE_PROFESSOR = "ASSOCIATE_PROFESSOR",
    PROFESSOR = "PROFESSOR"
}
