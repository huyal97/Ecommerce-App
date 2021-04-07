import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { ProductItemComponent } from './shop/product-item/product-item.component';
import { ProductDetailComponent } from './shop/product-detail/product-detail.component';
import { BasketComponent } from './basket/basket.component';

const routes : Routes= [
  { path: 'categories', component: ShopComponent },
  { path: 'categories/:id', component: ProductDetailComponent },
  { path: 'product', component: ProductItemComponent },
  { path: 'basket', component: BasketComponent },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule
  ]
})
export class AppRoutingModule { }
