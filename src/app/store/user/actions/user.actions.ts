import { createAction, props } from "@ngrx/store";

export const setUser = createAction(
    '[User] Create User', 
    props<{ user: { id: string; name: string; role: string }, token:string }>()
); // Define user property);
export const clearUser =  createAction('[User] Clear User');
export const refreshToken  = createAction(
    '[Auth] Refresh Token',
    props<{ token: string }>()
); // Explicitly add `token` property '


export const login = createAction('[Auth] Login', props<{ credentials: { email: string; password: string } }>());
export const loginSuccess = createAction('[Auth] Login Success', props<{ token: string; user: any }>());
export const loginFailure = createAction('[Auth] Login Failure', props<{ error: string }>());

export const signUp = createAction('[Auth] Sign Up', props<{ userData: any }>());
export const signUpSuccess = createAction('[Auth] Sign Up Success', props<{ user: any }>());
export const signUpFailure = createAction('[Auth] Sign Up Failure', props<{ error: string }>());

export const logout = createAction('[Auth] Logout');

export const refreshTokenSuccess = createAction('[Auth] Refresh Token Success', props<{ token: string }>());
export const refreshTokenFailure = createAction('[Auth] Refresh Token Failure', props<{ error: string }>());
