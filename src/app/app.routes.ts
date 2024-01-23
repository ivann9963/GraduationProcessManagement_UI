import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { UploadThesisComponent } from './upload-thesis/upload-thesis.component';
import { ThesesComponent } from './theses/theses.component';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';
import { ProfileComponent } from './profile/profile.component';
import { userResolver } from './profile/user.resolver';

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
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [authGuard],
        resolve: {
            user: userResolver
        }
    },
    {
        path: 'students',
        component: StudentsComponent,
        canActivate: [authGuard]
    },
    {
        path: 'teachers',
        component: TeachersComponent,
        canActivate: [authGuard]
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
