import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "consumers",
    loadChildren: () => import('./consumers/consumers.module').then(m => m.ConsumersModule)
  },
  {
    path: "**",
    redirectTo: 'consumers' // Catch all undefined paths
  }
  //   Default Module to be for home screen
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
