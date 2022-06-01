import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { CartComponent } from '../cart-component/cart-component.component';
import { ProducthomeComponent } from './producthome.component';
import { BrowserModule } from '@angular/platform-browser'
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const routes:Routes = [
    // {path:"",component:ProducthomeComponent},
    // {path:"Cart",component:CartComponent},
    // {path:"Cart/id",component:CartComponent},
    // {path:"**",component:PageNotFoundComponent},
    
]

@NgModule({
  
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule
  ],

 exports:[
   RouterModule
 ]
})
export class ProductModule { }
