import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  {path:'', component:ProductsComponent},
  {path:'create', component:ProductAddComponent},
  {path:'update/:id', component:ProductAddComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
