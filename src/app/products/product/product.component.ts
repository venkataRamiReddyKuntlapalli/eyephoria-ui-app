import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { addProductToCart } from 'src/app/store/cart/cart.actions';

export interface Product {
  quantity: number;
  name: string,
  price: number; 
  imageUrl: string 
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  standalone: false
})
export class ProductComponent {
  @Input() product!: Product;
  @Output() productSelectedTocart = new EventEmitter();

  constructor(private store: Store) {}

  addToCart() {
    // console.log("Product component, selected product: ", this.product)
    // this.productSelectedTocart.emit(this.product); // Emmits product data
    this.store.dispatch(addProductToCart({product: this.product}))
  }

}
