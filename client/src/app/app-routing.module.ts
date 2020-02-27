import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './navi/page-not-found/page-not-found.component';


const routes: Routes = [
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
