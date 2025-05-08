import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountManagementComponent } from './account-management/account-management.component';
import { AppointmentBookingComponent } from './appointment-booking/appointment-booking.component';
import { PaymentBillingComponent } from './payment-billing/payment-billing.component';

const consumerRoutes: Routes = [
  { path: '', redirectTo: 'account-management', pathMatch: 'full' }, // Default to login
  {
    path: 'account-management',
    component: AccountManagementComponent
  },
  {
    path: 'appointment-booking',
    component: AppointmentBookingComponent
  },
  {
    path: 'payment-billing',
    component: PaymentBillingComponent
  },
  {
    path: "**",
    redirectTo: 'account-management' // Catch all undefined paths
  }
];

@NgModule({
  imports: [RouterModule.forChild(consumerRoutes)],
  exports: [RouterModule]
})
export class ConsumersRoutingModule { }
