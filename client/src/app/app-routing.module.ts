import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { ProductItemComponent } from './shop/product-item/product-item.component';
import { ProductDetailComponent } from './shop/product-detail/product-detail.component';
import { BasketComponent } from './basket/basket.component';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './home/home.component';


const routes : Routes= [
          { path: '',component: HomeComponent,pathMatch: 'full'},
          { path: 'categories', component: ShopComponent },
          { path: 'categories/:id', component: ProductDetailComponent },
          { path: 'product', component: ProductItemComponent },
          {
            path: 'account', loadChildren: () => import('./account/account.module').then(mod => mod.AccountModule),
            data: { breadcrumb: {skip: true} }
          },
          {
            path: 'checkout',
            canActivate: [AuthGuard],
            loadChildren: () => import('./checkout/checkout.module').then(mod => mod.CheckoutModule),
            data: { breadcrumb: 'Checkout' }
          },
          {
            path: 'orders',
            canActivate: [AuthGuard],
            loadChildren: () => import('./orders/orders.module').then(mod => mod.OrdersModule),
            data: { breadcrumb: 'Orders' }
          },
          {
            path: 'basket',
            canActivate: [AuthGuard],
            loadChildren: () => import('./basket/basket.module').then(mod => mod.BasketModule),
            data: { breadcrumb: 'Basket'}
          },
          {
            path: '**', redirectTo: 'not-found', pathMatch: 'full'
          },


];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),

  ],
  exports:[RouterModule
  ]
})
export class AppRoutingModule { }
