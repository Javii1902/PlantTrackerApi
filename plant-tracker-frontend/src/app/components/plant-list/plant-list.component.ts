import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantService } from '../../services/plant.service';

@Component({
  selector: 'app-plant-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent implements OnInit {
  plants: any[] = [];

  constructor(private plantService: PlantService) {}

  ngOnInit(): void {
    this.plantService.getPlants().subscribe({
      next: (data) => this.plants = data,
      error: (err) => console.error('Error loading plants:', err)
    });
  }
}
