import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


@Injectable()
export class AuthGuard {

  constructor(
    private router: Router
  ) { }

  canActivate(): boolean {
    if (sessionStorage.getItem('token')) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}

export const authGuard: CanActivateFn = (_route, _state) => {
  return inject(AuthGuard).canActivate();
};