import { createReducer, on } from '@ngrx/store';
import { loginSuccess, logout, refreshToken } from './actions/auth.actions';
import { setUser } from '../user/actions/user.actions';

export interface AuthState {
  token: string | null;
  user: { id: string, name: string, role: string } | null;
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
  on(setUser, (state, { user, token }) => ({
    ...state,
    user,
    token
  })),
  on(refreshToken, (state, { token }) => ({
    ...state,
    token
  })),
  on(logout, () => initialState)
);