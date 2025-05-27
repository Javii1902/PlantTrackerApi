import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PlantService } from '../../services/plant.service';

@Component({
  selector: 'app-plant-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent implements OnInit {
  plants: any[] = [];
  isLoading = true;
  error: string | null = null;

  constructor(private plantService: PlantService) {}

  ngOnInit(): void {
    this.plantService.getPlants().subscribe({
      next: (data) => {
        this.plants = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to load plants';
        console.error('Error fetching plants:', err);
        this.isLoading = false;
      }
    });
  }
}
