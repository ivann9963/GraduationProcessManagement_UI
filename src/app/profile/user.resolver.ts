import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { Teacher } from '../models/Teacher';
import { Student } from '../models/Student';

export const userResolver: ResolveFn<Observable<Teacher | Student>> = (route, state) => {
  const authService = inject(AuthService);
  const userService = inject(UserService)
  const user = authService.user.value;
  return userService.getUserById(user.id, user.role);
};
