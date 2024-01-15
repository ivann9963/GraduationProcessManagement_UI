import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UploadThesisComponent } from '../upload-thesis/upload-thesis.component';
import { CommonModule } from '@angular/common';
import { ProcessThesisComponent } from '../process-thesis/process-thesis.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UploadThesisComponent, CommonModule, ProcessThesisComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(public authService: AuthService) {}
}
