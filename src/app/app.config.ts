import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './services/auth.service';
import { authInterceptor } from './interceptors/auth.interceptor';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideNoopAnimations(), AuthGuard, AuthService, provideHttpClient(withInterceptors(
    [authInterceptor],

  ))],
  

};
