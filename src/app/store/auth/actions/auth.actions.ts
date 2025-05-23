import { createAction, props } from "@ngrx/store";

export const login = createAction('[Auth] Login', props<{ credentials: { email: string; password: string } }>());
export const loginSuccess = createAction('[Auth] Login Success', props<{ token: string; user: any }>());
export const loginFailure = createAction('[Auth] Login Failure', props<{ error: string }>());

export const logout = createAction('[Auth] Logout');

export const refreshToken = createAction('[Auth] Refresh Token', props<{ token: string }>());
export const refreshTokenSuccess = createAction('[Auth] Refresh Token Success', props<{ token: string }>());
export const refreshTokenFailure = createAction('[Auth] Refresh Token Failure', props<{ error: string }>());
