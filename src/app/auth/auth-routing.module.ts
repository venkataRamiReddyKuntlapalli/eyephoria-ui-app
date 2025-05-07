import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const authRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Default to login
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: '**', redirectTo: 'signup' } // Catch-all route inside AuthModule
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)], // Ensures proper routing within AuthModule
  exports: [RouterModule]
})
export class AuthRoutingModule {}

