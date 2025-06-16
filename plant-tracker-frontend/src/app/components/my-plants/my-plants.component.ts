import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PlantService } from '../../services/plant.service';
import { Plant } from '../plant-list/plant-list.component';

@Component({
  selector: 'app-my-plants',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './my-plants.component.html',
  styleUrls: ['./my-plants.component.css']
})
export class MyPlantsComponent implements OnInit {
  userId = 1; // Ideally get this from an auth service
  plants: Plant[] = [];
  isLoading = true;
  error: string | null = null;

  constructor(private plantService: PlantService) {}

  ngOnInit(): void {
    this.plantService.getUserPlants(this.userId).subscribe({
      next: (data) => {
        this.plants = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to load user plants';
        this.isLoading = false;
        console.error(err);
      }
    });
  }
}
