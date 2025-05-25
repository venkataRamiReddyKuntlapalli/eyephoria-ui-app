import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { logout } from 'src/app/store/auth/actions/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  

  constructor(private store: Store<any>) { }

  logout() {
    alert('You have been logged out successfully!');
    // Clear the token from local storage
    localStorage.removeItem('token');
    // Optionally, you can also clear other user-related data if needed
    localStorage.removeItem('userData');
    // trigger logout action in the store
    this.store.dispatch(logout());
    
    // Redirect to the login page or perform any other necessary actions
    window.location.href = '/login'; // Redirect to the login page
    
  }
    
}
