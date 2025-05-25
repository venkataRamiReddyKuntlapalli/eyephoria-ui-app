declare var google: any;

import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { login } from 'src/app/store/auth/actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: false
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  isLoading: boolean = false;
  constructor(private router: Router, private formBuilder: FormBuilder, private authservice: AuthService
    , private store: Store, private ngZone: NgZone
  ) { }
  ngOnInit(): void {

    // https://developers.google.com/identity/gsi/web/reference/js-reference 
    // Logic to handle Google Sign-In
    // Load the Google Identity Services library
    google.accounts.id.initialize({
      client_id: '141846116899-ir687l6rr47ds3aacf2ts2ubrob1229e.apps.googleusercontent.com',
      callback: (resp: any) => {
        this.isLoading = true
        console.log(resp);
        this.handleGoogleLogin(resp);
      }
    })

    // Render the Google Sign-In button
    google.accounts.id.renderButton(document.getElementById("google-btn"), {
      theme: 'filled_blue',
      size: 'large',
      shape: 'rectangle',
      width: 350
    })

    // reactive form validation
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  // function to handle Google login
  handleGoogleLogin(response: any) {
    if (response?.credential) {
      const userData = this.authservice.getGoogleUser(response.credential);
      // Only dispatch login, let the effect handle loginSuccess
      this.store.dispatch(login({ credentials: { email: userData.email, password: userData.sub } }));
      // Optionally, store token/userData locally if needed for non-NgRx logic
      localStorage.setItem("token", response.credential);
      localStorage.setItem("userData", JSON.stringify(userData));
      this.ngZone.run(() => {
        this.isLoading = false;
        // Navigate to the desired route after successful login
        this.router.navigate(['/appointment-booking']);
      });
    }
  }

  // on click of login button from login form
  onLoginSubmit() {
    if (this.loginForm.valid) {
      console.log("login form valid")
      const credentials = this.loginForm.value;
      this.store.dispatch(login({ credentials }));
      this.authservice.login(this.loginForm.value).subscribe((response) => {
        if (response.status == "SUCCESS") {
          // this.store.select(state => state.auth.token).subscribe(token => {
          //   if (token) {
          //     localStorage.setItem("token", response.token);
          //   }
          // })
          // Extract user role
          const userRole = response.user.role; // Assuming response contains role

          // Dispatch login action with user details
          this.store.dispatch(login({ credentials: { email: credentials.email, password: credentials.password } }));

          // Store role in local storage (or use NgRx for global state)
          localStorage.setItem("token", response.token);
          localStorage.setItem("role", userRole);

          // Navigate based on role
          switch (userRole) {
            case 'admin':
              this.router.navigate(['/admin-dashboard']);
              break;
            case 'doctor':
              this.router.navigate(['/doctor-dashboard']);
              break;
            case 'patient':
              this.router.navigate(['/appointment-booking']);
              break;
            default:
              this.router.navigate(['/auth/login']); // Redirect to login if role is unknown
          }
        }
      })
    }
  }

  // on click of cancel button from login form 
  resetLoginForm() {
    this.loginForm.reset();
    this.isLoading = false;
  }

}
