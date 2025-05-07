import { createReducer, on } from '@ngrx/store';
import { loginSuccess, logout } from 'src/app/store/user/actions/user.actions';

export interface AuthState {
  token: string | null;
  user: any; // Can be expanded to a more structured user model
}

export const initialState: AuthState = {
  token: null,
  user: null
};

export const authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, { token, user }) => ({
    ...state,
    token,
    user
  })),
  on(logout, () => initialState) // Reset state on logout
);
