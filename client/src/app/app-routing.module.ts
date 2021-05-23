import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { ProductItemComponent } from './shop/product-item/product-item.component';
import { ProductDetailComponent } from './shop/product-detail/product-detail.component';
import { BasketComponent } from './basket/basket.component';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { IndexModule } from './layout/index/index.module';
import { IndexComponent } from './layout/index/index.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';

const routes : Routes= [
  {
    path:'',
    component:IndexComponent,
    pathMatch:'full',
    children: [
      {
        path:'',
        pathMatch:'full',
        loadChildren: () => import('./layout/index/index.module').then(m=> m.IndexModule)
      },

    ]


  },
  {
    path:'dashboard',
    component:DashboardComponent,
    children: [
      {
        path:'',
        pathMatch:'full',
        loadChildren: () => import('./layout/dashboard/dashboard.module').then(m=> m.DashboardModule)
      },

    ]


  },



];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    IndexModule

  ],
  exports:[RouterModule
  ]
})
export class AppRoutingModule { }
