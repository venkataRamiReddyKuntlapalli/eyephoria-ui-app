import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environment/environment';
// import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient
    //  private cookieService: CookieService
    ) { console.log('AuthService initialized');
    }

  login(credentials: {email: string, password: string}):  Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials)
      .pipe(
        catchError( error => {
          console.log('Login Failed:', error);
          return throwError( () => new Error("Unable to Login Please try again later"))
          
        })
      )
    // .subscribe((response: any) => {
    //   const token = response.accessToken; // Assume Auth0 response includes the access token
    //   this.cookieService.set('auth-token', token, {
    //     secure: true, // Only sent over HTTPS
    //     sameSite: 'Strict'
    //   });
    // });
  }

  signUp(userData:any): Observable<any> {
    // return this.http.post(`${this.baseUrl}/singin`, userData);
    return this.http.post(`${this.baseUrl}/signup`, userData)
      .pipe(
        catchError( error => {
          console.log('SignUp failed:', error);
          return throwError( () => new Error("signUp failed"));
        })
      )
  }

  logOut() {
    // this.cookieService.delete('auth-token');
    localStorage.removeItem('token'); // Clear the token
  }

  getToken(): string | null {
    // return this.cookieService.get('auth-token');
    return localStorage.getItem('token');
  }

}
