import { createReducer, on } from "@ngrx/store";
import { UserState } from "../models/user-state.model";
import { clearUser, refreshToken, setUser } from "../actions/user.actions";

const initialState: UserState = {
    user: null,
    token: ""
}

export const userReducer = createReducer(
    initialState,
    on(setUser, (state, { user, token }) => ({ ...state, user, token })), // here { user, token } => action
    on(clearUser, () => ({ user: null, token: '' })),
    on(refreshToken, (state, action) => ({  // here action  is => {token}
        ...state,
        token: action.token // Correctly accessing `token`
      }))
  );