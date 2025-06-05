import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';  // <-- Import environment

@Injectable({
  providedIn: 'root'
})
export class PlantService {
  private apiUrl = `${environment.apiUrl}/plants`;  // <-- Use environment apiUrl

  constructor(private http: HttpClient) {}

  getPlants(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
