import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button'
import { AuthService } from './services/auth.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatToolbarModule, MatButtonModule, 
    RouterModule, MatSidenavModule, MatListModule],
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
