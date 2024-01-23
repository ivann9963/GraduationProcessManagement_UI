import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Student } from '../models/Student';
import { StudentService } from '../services/student.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-students',
  standalone: true,
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  imports: [MatTableModule, MatCardModule, CommonModule],
})
export class StudentsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'facultyNumber'];
  dataSource: MatTableDataSource<Student>;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe((students: Student[]) => {
      this.dataSource = new MatTableDataSource(students);
    });
  }
}
