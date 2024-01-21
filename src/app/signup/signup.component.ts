import { Component, OnInit } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [MatInputModule, MatCardModule, FormsModule, ReactiveFormsModule, MatOptionModule, MatSelectModule],
  providers: [UserService],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  isEnabled(): boolean {
    return this.formGroup.valid && this.getFormGroupValue('password') === this.getFormGroupValue('repPass');
  }

  createUser() {
    const { name, password, role } = this.formGroup.value;
    const body = { username: name, password, role }; 
    this.userService.createUser(body).subscribe((res: any) => {
      this.authService.storeUser(res);
      this.router.navigate(['home']);
    })
  }

  private initForm() {
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required, Validators.min(5), Validators.max(42)]],
      password: ['', [Validators.required, Validators.min(5), Validators.max(42)]],
      repPass: ['', [Validators.required, Validators.min(5), Validators.max(42)]],
      role: ['student', Validators.required]
    })
  }

  private getFormGroupValue(name: string) {
    return this.formGroup.get(name).value;
  }
}
