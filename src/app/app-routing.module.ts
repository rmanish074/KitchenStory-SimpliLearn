import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { KitchenDashComponent } from './kitchen-dash/kitchen-dash.component';

const routes: Routes = [
  {path:'', component:KitchenDashComponent},
  {path: 'search/:searchItem', component:KitchenDashComponent},
  {path: 'tag/:tag', component:KitchenDashComponent},
  {path: 'food/:id', component: FoodPageComponent},
  {path: 'cart-page', component: CartPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
