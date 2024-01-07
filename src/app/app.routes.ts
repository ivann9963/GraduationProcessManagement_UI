import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        
    },
    {
        path: 'signup',
        component: SignupComponent,
        
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [authGuard]
    },
    // {
    //     path: '**',
    //     redirectTo: 'home'
    // }
];
