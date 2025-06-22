import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <header class="app-header">Plant Tracker</header>
    <nav>
      <a routerLink="/plants">Plants</a> |
      <a routerLink="/my-plants" *ngIf="authService.isLoggedIn()">My Plants</a> 
      <a routerLink="/register" *ngIf="!authService.isLoggedIn()">Register</a> |
      <a routerLink="/login" *ngIf="!authService.isLoggedIn()">Login</a>
      <a (click)="logout()" *ngIf="authService.isLoggedIn()" style="cursor:pointer;">Logout</a>
    </nav>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public authService: AuthService) {}

  logout(): void {
    this.authService.clearUser();
  }
}
