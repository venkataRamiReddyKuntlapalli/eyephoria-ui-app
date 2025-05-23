import { createReducer, on } from "@ngrx/store";
import { addProductToCart, removeProductFromCart } from "./cart.actions";
import { Product } from "src/app/shared/models/product";
import { CartState } from "../app.state";

// export const initialState: Product[] = []; // Define cart as an array of products

export const initialState: CartState = {
    items: [], // Empty array at start
  };

export const cartReducer = createReducer(
    initialState,
    on(addProductToCart, (state, { product }) => {
      const existingProductIndex = state.items.findIndex(item => item.name === product.name);
      if (existingProductIndex !== -1) {
        const updatedItems = [...state.items]; // cloning the existing items
        // Increment the quantity of the existing product
        updatedItems[existingProductIndex] = {
          ...updatedItems[existingProductIndex],
          quantity: (updatedItems[existingProductIndex].quantity || 1) + 1,
        };
        return { ...state, items: updatedItems };
      } else {
        return { ...state, items: [...state.items, { ...product, quantity: 1 }] };
      }
    }),

    // on(removeProductFromCart, (state, { productId }) => ({
    //   ...state,
    //   items: state.items.filter(p => p.id !== productId),
    // }))
  );
  
