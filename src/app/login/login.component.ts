import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PermissionsService } from '../auth/auth.guard';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatInputModule, MatCardModule, FormsModule, ReactiveFormsModule, CommonModule, HttpClientModule],
  providers: [UserService, PermissionsService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  error: string;

  constructor(private userService: UserService, private router: Router, private formBuilder: FormBuilder) {}
  
  ngOnInit(): void {
    this.initForm();
  }
  
  userExists() {
    const {name, password} = this.formGroup.value;
    const body = {username: name, password};
    this.userService.userExists(body).subscribe((res: any) => {
      sessionStorage.setItem('token', JSON.stringify(res));
      this.router.navigate(['home']);
    })
  }

  
  private initForm() {
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required, Validators.min(5), Validators.max(42)]],
      password: ['', [Validators.required, Validators.min(5), Validators.max(42)]]
    })
  }

  private getFormGroupValue(name: string) {
    return this.formGroup.get(name).value;
  }
}
