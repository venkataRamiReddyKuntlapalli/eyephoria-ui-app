import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-management',
  templateUrl: './account-management.component.html',
  styleUrls: ['./account-management.component.scss']
})
export class AccountManagementComponent {
  constructor(private router:Router){}
navigateToAappointmentBooking() {
  this.router.navigate(['/consumers/appointment-booking']);
}

}
