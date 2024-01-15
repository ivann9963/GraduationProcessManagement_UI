import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { User } from '../models/User';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatInputModule, MatCardModule, FormsModule, ReactiveFormsModule, CommonModule, HttpClientModule],
  providers: [UserService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  error: string;

  constructor(private userService: UserService, private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  userExists() {
    const { name, password } = this.formGroup.value;
    const body = { username: name, password };
    this.userService.userExists(body).subscribe({
      next: (res) => {
        const user = res as User; 
        this.authService.storeUser(user);
        this.router.navigate(['home']);
      },
      error: (err) => {
        this.error = err.error;
      }
    });
  }


  private initForm() {
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required, Validators.min(5), Validators.max(42)]],
      password: ['', [Validators.required, Validators.min(5), Validators.max(42)]]
    })
  }
}
