import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { PermissionsService } from './auth/auth.guard';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideNoopAnimations(), PermissionsService]
};
