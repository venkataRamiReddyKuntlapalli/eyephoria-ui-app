import { Component } from '@angular/core';
import { CartService } from 'src/app/shared/service/cart.service';
import { ProductComponent } from "../product/product.component";

@Component({
  selector: 'app-contact-lenses',
  templateUrl: './contact-lenses.component.html',
  styleUrls: ['./contact-lenses.component.scss'],
  standalone: false
})
export class ContactLensesComponent {
  products = [
    { name: 'Laptop', price: 999, quantity: 0, imageUrl: 'https://ts1.mm.bing.net/th?id=OIP.j0PyBy2MyD0VrgDmALUR5QHaE8&pid=15.1' },
    { name: 'Smartphone', price: 599, quantity: 0, imageUrl: 'https://ts1.mm.bing.net/th?id=OIP.WcSzLTxyBve_cF-rKJkSaQHaFX&pid=15.1' },
    { name: 'Headphones', price: 199, quantity: 0, imageUrl: 'https://ts4.mm.bing.net/th?id=OIP.zIx1TMdygERMM5WdazxJyAHaLH&pid=15.1' }
  ];

  constructor(private cartService: CartService) {}

  handleProductSelected(product: any) {
    console.log("Contact-lenses, selected product: ", product)
    this.cartService.addToCart(product); // Store in CartService
  }
}
