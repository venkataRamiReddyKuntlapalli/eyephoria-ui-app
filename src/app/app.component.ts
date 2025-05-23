import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from './shared/models/product';
import { refreshToken } from './store/auth/actions/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false
})
export class AppComponent {
  title = 'eyephoria-ui-app';
  selectedValue: any;
  empData!: Array<EmployeeData>;

  role: any = "admin";
  cart: any[] = [];
  cartCount!: number;
  
  constructor( private store: Store<{ cart: Product[] }>) {}
  ngOnInit() {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      this.store.dispatch(refreshToken({ token: storedToken })); // Refresh session
    }
    this.store.select('cart').subscribe(cart => {
      console.log(" Cart data :", cart)
      this.cartCount = cart.length; // Update cart count dynamically
    });
    
    this.empData = [
      {
        id: 1,
        name: "ram",
        salary: 80000
      },
      {
        id: 2,
        name: "krish",
        salary: 70000
      },
      {
        id: 3,
        name: "surya",
        salary: 90000
      }
    ];
    console.log("Filteredemp data: " , this.filterEmpData());
  }

  filterEmpData(): any{
    return this.empData.filter(emp =>  emp.salary >= 80000)
      .map(emp => ({id:emp.id, name:emp.name}));
  }
  
}

interface EmployeeData {
  id: number,
  name: string,
  salary: number
}
