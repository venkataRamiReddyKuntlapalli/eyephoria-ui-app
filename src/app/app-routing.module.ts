import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: "consumers",
    loadChildren: () => import('./consumers/consumers.module').then(m => m.ConsumersModule),
    canActivate: [AuthGuard]
  },
  {
    path: "auth",
    loadChildren: () => import('./auth/auth.module').then((m)=> m.AuthModule  )
  },
  {
    path: "**",
    redirectTo: 'consumers',   // Catch all undefined paths
    pathMatch:"full"
  }
  //   Default Module to be for home screen
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
