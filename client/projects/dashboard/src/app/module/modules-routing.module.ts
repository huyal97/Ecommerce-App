import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';


const routes: Routes = [
  {path:'',component:HomeComponent, pathMatch:'full' },
  {path:'products', loadChildren: () => import('./products/products.module').then(m=> m.ProductsModule)},
  {path:'orders',component:OrdersComponent, pathMatch:'full' },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
