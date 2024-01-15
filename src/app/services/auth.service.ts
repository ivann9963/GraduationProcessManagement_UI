import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
    user = new BehaviorSubject<User>(null);

    storeUser(user: User) {
        sessionStorage.setItem('token', JSON.stringify(user));
        this.user.next(user);
    }
}
