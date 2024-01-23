import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ThesisService } from '../services/thesis.service';
import { Thesis } from '../models/Thesis';
import { MatCardModule } from '@angular/material/card';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-theses',
  standalone: true,
  imports: [MatTableModule, MatCardModule, CommonModule, FormsModule, ReactiveFormsModule, MatInputModule, MatInputModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './theses.component.html',
  styleUrl: './theses.component.css'
})
export class ThesesComponent implements OnInit {
  displayedColumns: string[] = ['title', 'objective', 'tasks', 'technologies', 'studentId', 'teacherId', 'submissionDate', 'addReview'];
  dataSource: MatTableDataSource<Thesis>;
  thesisToReview: Thesis;
  addReviewFormGroup: FormGroup;

  constructor(private thesisService: ThesisService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getAllTheses();
  }

  addReview(thesis: Thesis) {
    this.uploadReviewInitForm();
    this.thesisToReview = thesis;
  }

  createReview() {
    const body = {...this.addReviewFormGroup.value, thesisId: this.thesisToReview.id}
    this.thesisService.processThesis(body ).subscribe(res => {
      this.thesisToReview = null; 
      this.addReviewFormGroup.reset(); 
      this.getAllTheses();
    });
  }

  private uploadReviewInitForm() {
    this.addReviewFormGroup = this.formBuilder.group({
      text: ['', [Validators.required, Validators.min(3), Validators.max(42)]],
      conclusion: ['', [Validators.required, Validators.min(3), Validators.max(42)]]
    })
  }

  private getAllTheses() {
    this.thesisService.getAllTheses().subscribe((theses: Thesis[]) => {
      this.dataSource = new MatTableDataSource(theses);
    });
  }
}
