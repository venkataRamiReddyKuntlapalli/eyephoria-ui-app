import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactLensesComponent } from './contact-lenses/contact-lenses.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: '', redirectTo: 'contact-lenses', pathMatch: 'full' }, // Default to contact-lenses
  {
    path: 'contact-lenses',
    component: ContactLensesComponent,
    children: [
      {
        path: 'product',
        component: ProductComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
