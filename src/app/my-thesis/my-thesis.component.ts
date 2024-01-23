import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Thesis } from '../models/Thesis';
import { ThesisService } from '../services/thesis.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-my-thesis',
  standalone: true,
  imports: [MatTableModule, MatCardModule, CommonModule],
  templateUrl: './my-thesis.component.html',
  styleUrl: './my-thesis.component.css'
})
export class MyThesisComponent {
  displayedColumns: string[] = ['title', 'objective', 'tasks', 'technologies', 'studentId', 'teacherId', 'submissionDate'];
  dataSource: MatTableDataSource<Thesis>;

  constructor(private thesisService: ThesisService, private authService: AuthService) { }

  ngOnInit(): void {
    this.thesisService.getThesesById(this.authService.user.value.id).subscribe((theses: Thesis[]) => {
      this.dataSource = new MatTableDataSource(theses);
    });
  }
}
