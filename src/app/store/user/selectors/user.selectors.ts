import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UserState } from '../models/user-state.model';

export const selectUserState = createFeatureSelector<UserState>('user');
export const selectUser = createSelector(selectUserState, (state) => state.user);
export const selectToken = createSelector(selectUserState, (state) => state.token);
