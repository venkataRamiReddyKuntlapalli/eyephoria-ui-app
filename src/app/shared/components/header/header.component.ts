import { Component, Input, OnInit } from '@angular/core';
import { faMagnifyingGlass, faShoppingCart, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Product } from '../../models/product';
import { SharedService } from '../../service/shared.service';
import { UserState } from 'src/app/store/user/models/user-state.model';
import { selectUser } from 'src/app/store/user/selectors/user.selectors';
import { selectAuthUser, selectIsLoggedIn } from 'src/app/store/auth/auth.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false
})
export class HeaderComponent implements OnInit {
  @Input() cart!: any[];
  faShoppingCart = faShoppingCart;
  faMagnifyingGlass = faMagnifyingGlass;
  faBars = faBars;
  faTimes = faTimes;
  showAuthLinks: boolean = false;
  isLoggedIn: boolean = false;
  user: UserState["user"] = {
    id: '',
    name: '',
    role: ''
  };
  cartItemCount: any = 0;
  searchQuery: any = '';
  isMenuOpen = false;
  loggedInUserData: any;

  constructor(private store: Store<any>, public sharedService: SharedService){}

  ngOnInit(): void {
    this.store.select('auth').subscribe(user => {
      this.user = user;
      this.isLoggedIn = user? true : false;
      
      console.log("user at header comp: ", this.user, " user is logged in: ", this.isLoggedIn);
      this.showAuthLinks = !this.isLoggedIn;  
      console.log("isLoggedIn: ", this.isLoggedIn);
      console.log("showAuthLinks: ", this.showAuthLinks);
    });

    this.store.select('cart').subscribe(cartItems => {
      this.cart = cartItems.items; // Assign cart state correctly
      this.cartItemCount = this.cart.reduce((acc: any, item: Product) =>acc + item.quantity, 0);
      console.log("total cart items: ", this.cartItemCount);
    });

   this.store.select(selectAuthUser).subscribe(user => {
    this.user = user;
    console.log("user at header comp: ", this.user);
  });
  this.store.select(selectIsLoggedIn).subscribe(isLoggedIn => {
    this.isLoggedIn = isLoggedIn;
    this.showAuthLinks = !isLoggedIn;
  });
  }

  onSearch(): void {
    // Implement your search logic here
    if (this.searchQuery && this.searchQuery.trim()) {
      console.log('Searching for:', this.searchQuery);
      // You can add navigation or service call here
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
