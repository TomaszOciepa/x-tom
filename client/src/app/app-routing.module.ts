import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './navi/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { DroneComponent } from './client/drone/drone.component';
import { LaptopComponent } from './client/laptop/laptop.component';
import { SmartphoneComponent } from './client/smartphone/smartphone.component';
import { ProductsComponent } from './client/products/products.component';
import { PageNotFoundComponent } from './navi/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path:'home',
    component:  HomeComponent
  },
  {
    path:'login',
    component:  LoginComponent
  },
  {
    path:'profile',
    component:  ProfileComponent
  },
  {
    path:'drone',
    component:  DroneComponent
  },
  {
    path:'laptop',
    component:  LaptopComponent
  },
  {
    path:'smartphone',
    component:  SmartphoneComponent
  },
  // {
  //   path:'products',
  //   component:  ProductsComponent
  // },
  {
    path:'not-found',
    component: PageNotFoundComponent
  },
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'**',
    redirectTo: 'not-found',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    // enableTracing: true,
    useHash:true,
    // errorHandler:()=>{},
    // initialNavigation: true,

  })
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
