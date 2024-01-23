import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Student } from '../models/Student';
import { TeacherService } from '../services/teacher.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Teacher } from '../models/Teacher';

@Component({
  selector: 'app-teachers',
  standalone: true,
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css'],
  imports: [MatTableModule, MatCardModule, CommonModule],
})
export class TeachersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'position'];
  dataSource: MatTableDataSource<Teacher>;

  constructor(private teacherService: TeacherService) { }

  ngOnInit(): void {
    this.teacherService.getAllTeachers().subscribe((teachers: Teacher[]) => {
      this.dataSource = new MatTableDataSource(teachers);
    });
  }
}
