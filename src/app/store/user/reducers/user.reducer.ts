import { createReducer, on } from "@ngrx/store";
import { UserState } from "../models/user-state.model";
import { clearUser, setUser } from "../actions/user.actions";
import { loginSuccess, refreshToken } from "../../auth/actions/auth.actions";
const initialState: UserState = {
    user: null,
    token: ""
}

export const userReducer = createReducer(
    initialState,
    on(setUser, (state, { user, token }) => ({ ...state, user, token })), // here { user, token } => action
    on(loginSuccess, (state, { token, user }) => {
        console.log('Reducer loginSuccess:', { token, user });
        return {
        ...state,
        token,
        user
        }
      }),
    on(clearUser, () => ({ user: null, token: '' })),
    on(refreshToken, (state, action) => ({  // here action  is => {token}
        ...state,
        token: action.token // Correctly accessing `token`
      }))
  );