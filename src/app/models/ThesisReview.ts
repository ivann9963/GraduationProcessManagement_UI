import { Teacher } from "./Teacher";
import { Thesis } from "./Thesis";

export type ThesisReview = {
    id?: number; 
    thesis: Thesis;
    reviewer: Teacher;
    submissionDate: Date | string;
    text: string;
    conclusion: boolean;
}