import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './product/product.component';
import { ContactLensesComponent } from './contact-lenses/contact-lenses.component';
import { SunGlassesComponent } from './sun-glasses/sun-glasses.component';


@NgModule({
  declarations: [
    ProductComponent,
    ContactLensesComponent,
    SunGlassesComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
