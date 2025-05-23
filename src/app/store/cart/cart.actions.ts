import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/shared/models/product";

export const addProductToCart = createAction(
    "[Cart] Add Product",
    props<{ product: Product }>() // Define product type
);

export const removeProductFromCart = createAction(
    "[product] remove product from carts", 
    props<{product:Product}>()
);

