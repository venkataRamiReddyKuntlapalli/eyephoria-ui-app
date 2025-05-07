import { Component } from '@angular/core';
import { refreshToken } from './store/user/actions/user.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eyephoria-ui-app';
selectedValue: any;
  empData!: Array<EmployeeData>;
  constructor(private store: Store) {}
  ngOnInit() {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      this.store.dispatch(refreshToken({ token: storedToken })); // Refresh session
    }
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
