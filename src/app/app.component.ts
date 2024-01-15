import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button'
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { skip } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatToolbarModule, MatButtonModule, RouterModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'GPM_UI';
  sessionStorage = sessionStorage

  constructor(private authService: AuthService) {}
  
  ngOnInit(): void {
    this.authService.user.subscribe(val => console.log(val));
  }

  isLoggedIn() {
    return sessionStorage.getItem('token');
  }
}
