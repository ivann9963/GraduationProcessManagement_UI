import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { ThesisService } from '../services/thesis.service';

@Component({
  selector: 'app-upload-thesis',
  templateUrl: './upload-thesis.component.html',
  styleUrls: ['./upload-thesis.component.css'],
  standalone: true,
  imports: [MatInputModule, MatCardModule, FormsModule, ReactiveFormsModule, CommonModule],
  providers: [ThesisService],
})
export class UploadThesisComponent implements OnInit {
  formGroup: FormGroup;
  error: string;

  constructor(private thesisService: ThesisService, private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.initForm();
  }

  createThesis() {
    const { title, objective, tasks, technologies } = this.formGroup.value;
    const body = { title, objective, tasks, technologies, submissionDate: new Date(), studentId: this.authService.user.value.id }
    this.thesisService.uploadThesis(body).subscribe((res: any) => console.log(res))
  }

  private initForm() {
    this.formGroup = this.formBuilder.group({
      title: ['', [Validators.required, Validators.min(3), Validators.max(42)]],
      objective: ['', [Validators.required, Validators.min(3), Validators.max(42)]],
      tasks: ['', [Validators.required, Validators.min(3), Validators.max(42)]],
      technologies: ['', [Validators.required, Validators.min(3), Validators.max(42)]]
    })
  }
}
