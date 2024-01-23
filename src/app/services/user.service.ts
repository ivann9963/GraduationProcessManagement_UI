import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { Teacher } from '../models/Teacher';
import { Student } from '../models/Student';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createUser(body: any) {
    return this.http.post('server/api/register', body);
  }

  userExists(body: any) {
    return this.http.post('server/api/login', body);
  }

  getUserById(id:string, role: string): Observable<Teacher | Student> {
    const url = role === 'STUDENT' ? `server/api/students/${id}` : `server/api/teachers/${id}`;
    return this.http.get<Teacher | Student>(url);
  }
}
