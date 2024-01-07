import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

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
}
