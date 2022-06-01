import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProducthomeComponent } from './producthome/producthome.component';
import { CartComponent } from './cart-component/cart-component.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path:"",component:ProducthomeComponent},
    {path:"Cart",component:CartComponent},
    {path:"Cart/id",component:CartComponent},
    {path:"**",redirectTo:"", pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
