import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PlantService } from '../../services/plant.service';

export interface Plant {
  id: number;
  name: string;
  seedType: string;
  bestPlantingStartMonth?: number | null;
  bestPlantingEndMonth?: number | null;
  imageUrl?: string | null;
  seedImageUrl?: string | null;
  description?: string | null;
  careInstructions?: string | null;
}

@Component({
  selector: 'app-plant-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent implements OnInit {
  plants: Plant[] = [];
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

  getMonthRange(start: number | null | undefined, end: number | null | undefined): string {
    const monthNames = [ '', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];

    if (!start || !monthNames[start]) return '';
    if (!end || !monthNames[end]) return monthNames[start];

    return start === end
      ? monthNames[start]
      : `${monthNames[start]} - ${monthNames[end]}`;
  }
}
