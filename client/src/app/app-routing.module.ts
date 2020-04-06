import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './navi/page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path:'not-found',
    component: PageNotFoundComponent
  },
  {
    path:'home',
    component:  HomeComponent
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
    // useHash:true,
    // errorHandler:()=>{},
    // initialNavigation: true,

  })
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
