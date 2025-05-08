import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Store } from '@ngrx/store';
import { login, loginSuccess } from 'src/app/store/user/actions/user.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder, private authservice: AuthService
    , private store: Store
  ) {}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [ Validators.required, Validators.email]],
      password: ['', [ Validators.required, Validators.minLength(6)]]
    })
  }

  onLoginSubmit() {
    if(this.loginForm.valid) {
      console.log("login form valid")
      const credentials = this.loginForm.value;
      this.authservice.login(this.loginForm.value).subscribe((response) => {
        if(response.status == "SUCCESS") {
         // this.store.select(state => state.auth.token).subscribe(token => {
          //   if (token) {
          //     localStorage.setItem("token", response.token);
          //   }
          // })
          // Extract user role
        const userRole = response.user.role; // Assuming response contains role

        // Dispatch login action with user details
        this.store.dispatch(login({ credentials: { email: credentials.email, password: credentials.password } }));
        this.store.dispatch(loginSuccess({
          token: localStorage.getItem('token') || "",
          user: response.user
        }))
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

}
