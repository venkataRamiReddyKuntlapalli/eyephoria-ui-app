import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Store } from '@ngrx/store';
import { login } from 'src/app/store/user/actions/user.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder, private authservice: AuthService, private store: Store) {}
  ngOnInit(): void {
    this.router.events.subscribe(event => console.log(event));
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
          this.store.dispatch(login({ credentials: { email: credentials.email='user@example.com', password: 'password123' } }));
          // this.store.select(state => state.auth.token).subscribe(token => {
          //   if (token) {
          //     localStorage.setItem("token", response.token);
          //   }
          // })
        }
      })
    }
  }

}
