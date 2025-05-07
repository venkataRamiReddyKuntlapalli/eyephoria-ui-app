import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
// import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Store } from '@ngrx/store';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router:Router, private store:Store) {}
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  // canActivate(): Observable<boolean> {
  //   return this.store.select(state => state.auth.token).pipe(
  //     map(token => !!token), // Allow access only if token exists
  //     tap(isLoggedIn => {
  //       if (!isLoggedIn) {
  //         this.router.navigate(['/auth/login']); // Redirect if not logged in
  //       }
  //     })
  //   );
  // }
  
  canActivate(): boolean {
    if(this.authService.getToken()) {
      return true;
    }
    this.router.navigate(['auth/login']);
    return false;
  }
  
}
