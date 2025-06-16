import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <header class="app-header">Plant Tracker</header>
    <nav>
      <a routerLink="/plants">Plants</a> |
      <a routerLink="/register">Register</a>
    </nav>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
