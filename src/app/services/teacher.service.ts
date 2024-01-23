import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Teacher } from '../models/Teacher';

@Injectable({ providedIn: 'root' })
export class TeacherService {
  constructor(private http: HttpClient) { }

  getAllTeachers() {
    return this.http.get<Teacher[]>('server/api/teachers');
  }
  createTeacher(teacher: Teacher) {
    return this.http.post('server/api/teachers', teacher);
  }

  updateTeacher(body: any, id: string) {
    return this.http.put(`server/api/teachers/${id}`, body);
  }
}
