import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../models/Student';

@Injectable({ providedIn: 'root' })
export class StudentService {
  constructor(private http: HttpClient) { }

  getAllStudents() {
    return this.http.get<Student[]>('server/api/students');
  }


  createStudent(student: Student) {
    return this.http.post('server/api/students', student);
  }

  updateStudent(body: any, id: string) {
    return this.http.put(`server/api/students/${id}`, body);
  }
}
