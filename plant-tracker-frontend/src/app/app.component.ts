import { Component } from '@angular/core';
import { PlantListComponent } from './components/plant-list/plant-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PlantListComponent],
  template: `<app-plant-list></app-plant-list>`,  // ✅ This line shows your component
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
