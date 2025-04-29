import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user : { userName: string, role: string} | null = null;
  constructor() { }

  login(user : {userName: string, role: string}) {
    this.user = user;
  }
  logout() {
    this.user = null;
  }

  isAuthenticated():boolean {
    return !!this.user;
  }

  getUserRole() {
    return this.user?.role || '';
  }
}
