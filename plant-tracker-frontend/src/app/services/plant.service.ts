import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Plant } from '../components/plant-list/plant-list.component';

@Injectable({
  providedIn: 'root'
})
export class PlantService {
  private apiUrl = `${environment.apiUrl}/plants`;

  constructor(private http: HttpClient) {}

  getPlants(): Observable<Plant[]> {
    return this.http.get<Plant[]>(this.apiUrl);
  }
}
