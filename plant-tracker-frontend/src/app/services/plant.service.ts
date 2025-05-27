import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlantService {
  private apiUrl = 'https://localhost:7015/api/plants';

  constructor(private http: HttpClient) {}

  getPlants(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
