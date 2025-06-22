import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-my-plants',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './my-plants.component.html',
  styleUrls: ['./my-plants.component.css']
})
export class MyPlantsComponent implements OnInit {
  userPlants: any[] = [];
  addPlantForm = this.fb.group({
    plantId: ['', Validators.required]
  });

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadPlants();
  }

  loadPlants(): void {
    const userId = this.authService.getUserId();
    if (!userId) return;

    this.http.get<any[]>(`${environment.apiUrl}/plants/user/${userId}/plants`).subscribe({
      next: (data) => this.userPlants = data,
      error: () => console.error('Failed to load user plants')
    });
  }

  addPlant(): void {
    const userId = this.authService.getUserId();
    if (!userId || this.addPlantForm.invalid) return;

    this.http.post(`${environment.apiUrl}/userplants`, {
      userId: userId,
      plantId: this.addPlantForm.value.plantId
    }).subscribe(() => {
      this.addPlantForm.reset();
      this.loadPlants();
    });
  }
}
