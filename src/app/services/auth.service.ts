import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
    user: BehaviorSubject<User>;

    constructor() {
        this.user = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('token') ) || null);
    }
    storeUser(user: User) {
        sessionStorage.setItem('token', JSON.stringify(user));
        this.user.next(user);
    }
}
