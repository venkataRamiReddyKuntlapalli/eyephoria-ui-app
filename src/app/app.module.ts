import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptorService } from './auth/token-interceptor.service';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './store/user/reducers/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth/store/effects/auth.effects';
import { authReducer } from './auth/store/auth.reducer';
import { FormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './src/app/auth/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ user: userReducer }),
    StoreModule.forRoot({ auth: authReducer }),
    EffectsModule.forRoot([AuthEffects]),
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    FormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true}
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
