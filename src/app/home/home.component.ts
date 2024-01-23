import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UploadThesisComponent } from '../upload-thesis/upload-thesis.component';
import { CommonModule } from '@angular/common';
import { ThesesComponent } from '../theses/theses.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UploadThesisComponent, CommonModule, ThesesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(public authService: AuthService) {}
}
