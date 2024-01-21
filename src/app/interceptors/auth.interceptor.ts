import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  if(authService.user.value) {
    const x = req.clone({
      headers: req.headers.set('auth', authService.user.value.username)
    });
    return next(x);
  }
  return next(req);
};
