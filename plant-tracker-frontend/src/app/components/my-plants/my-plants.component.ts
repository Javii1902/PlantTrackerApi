import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PlantService } from '../../services/plant.service';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-my-plants',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './my-plants.component.html',
  styleUrls: ['./my-plants.component.css']
})
export class MyPlantsComponent implements OnInit {
  addPlantForm!: FormGroup;
  userPlants: any[] = [];
  userId: number | null = null;
  isLoading = false;
  isAdding = false;
  addErrorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private plantService: PlantService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.userId = this.authService.getUserId();
    this.addPlantForm = this.fb.group({
      plantId: ['', Validators.required]
    });

    if (this.userId) {
      this.loadUserPlants();
    }
  }

  loadUserPlants(): void {
    this.isLoading = true;
    this.plantService.getPlantsForUser(this.userId!).subscribe({
      next: (plants) => {
        this.userPlants = plants;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error loading user plants:', err);
        this.isLoading = false;
      }
    });
  }

  addPlant(): void {
    if (this.addPlantForm.invalid || !this.userId) return;

    this.isAdding = true;
    this.addErrorMessage = null;
    const plantId = this.addPlantForm.value.plantId;

    this.plantService.addPlantToUser(this.userId, plantId).subscribe({
      next: () => {
        this.loadUserPlants();
        this.addPlantForm.reset();
        this.isAdding = false;
      },
      error: (err) => {
        console.error('Error adding plant:', err);
        this.addErrorMessage = 'Failed to add plant.';
        this.isAdding = false;
      }
    });
  }
}
