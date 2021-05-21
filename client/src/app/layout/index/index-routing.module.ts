import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { HomeComponent } from 'src/app/home/home.component';
import { ProductDetailComponent } from 'src/app/shop/product-detail/product-detail.component';
import { ProductItemComponent } from 'src/app/shop/product-item/product-item.component';
import { ShopComponent } from 'src/app/shop/shop.component';
import { IndexComponent } from './index.component';

const routes: Routes = [
      {
        path:'',
        component:IndexComponent,
      children:[
              { path: '',component: HomeComponent,pathMatch: 'full'},
              { path: 'categories', component: ShopComponent },
              { path: 'categories/:id', component: ProductDetailComponent },
              { path: 'product', component: ProductItemComponent },
              { path: 'home', component: HomeComponent },
              {
                path: 'account', loadChildren: () => import('../../account/account.module').then(mod => mod.AccountModule),
                data: { breadcrumb: {skip: true} }
              },
              {
                path: 'checkout',
                canActivate: [AuthGuard],
                loadChildren: () => import('../../checkout/checkout.module').then(mod => mod.CheckoutModule),
                data: { breadcrumb: 'Checkout' }
              },
              {
                path: 'orders',
                canActivate: [AuthGuard],
                loadChildren: () => import('../../orders/orders.module').then(mod => mod.OrdersModule),
                data: { breadcrumb: 'Orders' }
              },
              {
                path: 'basket',
                canActivate: [AuthGuard],
                loadChildren: () => import('../../basket/basket.module').then(mod => mod.BasketModule),
                data: { breadcrumb: 'Basket'}
              },
              {
                path: '**', redirectTo: 'not-found', pathMatch: 'full'
              },

      ]
    },

    ]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
