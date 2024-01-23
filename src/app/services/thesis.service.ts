import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Thesis } from '../models/Thesis';
import { ThesisReview } from '../models/ThesisReview';

@Injectable({ providedIn: 'root' })
export class ThesisService {
    constructor(private http: HttpClient) { }

    
    uploadThesis(body: any) {
        return this.http.post('server/api/thesis/upload-thesis', body);
    }

    processThesis(thesisReview: ThesisReview) {
        return this.http.post(`server/api/thesis/process-thesis`, thesisReview);
    }

    getAllTheses() {
        return this.http.get<Thesis[]>('server/api/thesis');
    }

    getThesesById(id: string) {
        return this.http.get<Thesis[]>(`server/api/thesis/${id}`);
    }

    assignStudentToThesis(thesisId: number, studentId: number) {
        return this.http.post(`server/api/thesis/${thesisId}/assign-student`, { studentId });
    }

    assignTeacherToThesis(thesisId: number, teacherId: number) {
        return this.http.post(`server/api/thesis/${thesisId}/assign-teacher`, { teacherId });
    }

}
