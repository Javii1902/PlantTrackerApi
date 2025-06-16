// src/app/services/account.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

export interface RegisterUserDto {
  username: string;
  email: string;
  passwordHash: string; // Replace with hashed password later
}

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private apiUrl = `${environment.apiUrl}/account`;

  constructor(private http: HttpClient) {}

  register(user: RegisterUserDto): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }
}
