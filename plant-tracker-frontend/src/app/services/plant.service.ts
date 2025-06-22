// src/app/services/plant.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlantService {
  private apiUrl = `${environment.apiUrl}/plants`;

  constructor(private http: HttpClient) {}

  getPlants(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getPlantsForUser(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/user/${userId}/plants`);
  }

  addPlantToUser(userId: number, plantId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/user/${userId}/add`, plantId, {
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
