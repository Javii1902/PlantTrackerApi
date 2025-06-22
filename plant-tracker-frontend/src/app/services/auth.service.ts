import { Injectable } from '@angular/core';

// src/app/services/auth.service.ts
@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly TOKEN_KEY = 'auth_user';

  saveUser(user: any) {  // ✅ Rename from setUser to saveUser
    localStorage.setItem(this.TOKEN_KEY, JSON.stringify(user));
  }

  getUser() {
    const stored = localStorage.getItem(this.TOKEN_KEY);
    return stored ? JSON.parse(stored) : null;
  }

  clearUser() {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  isLoggedIn(): boolean {
    return !!this.getUser();
  }

  getUserId(): number | null {
    return this.getUser()?.userId || null;
  }
}
