import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './module/products/products.component';

const routes: Routes = [
  {path:'',loadChildren: () => import('./module/modules.module').then(m=> m.ModulesModule)},
  {path:'test',component:ProductsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
