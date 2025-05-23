import { Product } from "../shared/models/product";


export interface AppState {
    cart: CartState;
}


export interface CartState {
    items: Product[];
    product?: Product; // 
    // Optional product if needed
  }

  