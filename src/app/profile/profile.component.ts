import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardLgImage, MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/User';
import { Student } from '../models/Student';
import { Teacher } from '../models/Teacher';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user.service';
import { StudentService } from '../services/student.service';
import { TeacherService } from '../services/teacher.service';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatCardModule, MatInputModule, ReactiveFormsModule, FormsModule, CommonModule, MatOptionModule, MatSelectModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  profileForm: FormGroup;
  user: Teacher | Student;
  role: 'STUDENT' | 'TEACHER'
  
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private studentService: StudentService, private teacherService: TeacherService) { }

  ngOnInit(): void {
    this.user = this.route.snapshot.data['user']
    console.log(this.user);
    if((this.user as Student).facultyNumber !== undefined) {
      this.initStudentForm();
      this.role = 'STUDENT';
    } else {
      this.initTeacherForm();
      this.role = 'TEACHER';
    }
  }
  initStudentForm() {
    this.profileForm = this.fb.group({
      username: [this.user.username],
      name: [this.user.name],
      facultyNumber: [(this.user as Student).facultyNumber]
    })
  }
  initTeacherForm() {
    this.profileForm = this.fb.group({
      username: [this.user.username],
      name: [this.user.name],
      position: [(this.user as Teacher).position]
    })
  }

  updateProfile(): void {
    if(this.role === 'STUDENT') {
      this.studentService.updateStudent(this.profileForm.value, this.user.id).subscribe({
        next: (res) => console.log(res),
        error: (err) => console.error(err)
      })
    } else {
      this.teacherService.updateTeacher(this.profileForm.value, this.user.id).subscribe({
        next: (res) => console.log(res),
        error: (err) => console.error(err)
      })
    }
  }
}

