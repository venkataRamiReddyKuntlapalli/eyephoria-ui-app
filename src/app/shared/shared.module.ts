import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BannerComponent } from './components/banner/banner.component';



// In Angular v15, the standalone component concept was introduced.
// Standalone components can be imported directly in the imports array of an NgModule.
// If HeaderComponent is a standalone component, you should import it in the imports array, not in declarations.

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    BannerComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    BannerComponent
    
  ]
})
export class SharedModule { }
