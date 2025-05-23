import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { signUp, signUpSuccess, signUpFailure } from 'src/app/store/user/actions/user.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { login, loginFailure, loginSuccess } from './actions/auth.actions';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      mergeMap(action =>
        this.authService.login(action.credentials).pipe(
          map(response => loginSuccess({ token: response.token, user: response.user })),
          catchError(error => of(loginFailure({ error: error.message })))
        )
      )
    )
  );

  signUp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(signUp),
      mergeMap(action =>
        this.authService.signUp(action.userData).pipe(
          map(response => signUpSuccess({ user: response.user })),
          catchError(error => of(signUpFailure({ error: error.message })))
        )
      )
    )
  );
}