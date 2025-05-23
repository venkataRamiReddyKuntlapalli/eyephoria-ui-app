import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Product[]= [];
  
  constructor() { }

  addToCart(product: Product) {
    console.log("cart Service, selected product: ", product);
    console.log("Cart :", this.cart)
    this.cart.push(product)
  }

  getCart() {
    return this.cart;
  }

}
