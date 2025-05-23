import { createAction, props } from "@ngrx/store";

export const setUser = createAction(
    '[User] Create User', 
    props<{ user: { id: string; name: string; role: string }, token:string }>()
); // Define user property);
export const clearUser =  createAction('[User] Clear User');

export const signUp = createAction('[Auth] Sign Up', props<{ userData: any }>());
export const signUpSuccess = createAction('[Auth] Sign Up Success', props<{ user: any }>());
export const signUpFailure = createAction('[Auth] Sign Up Failure', props<{ error: string }>());
