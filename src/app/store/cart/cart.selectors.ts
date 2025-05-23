import { createSelector, createFeatureSelector } from "@ngrx/store";
import { CartState } from "./app.state";

export const selectCartState = createFeatureSelector<CartState>("cart");

export const selectCartItems = createSelector(selectCartState, state => state.items);
