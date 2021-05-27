import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { HomeComponent } from 'src/app/home/home.component';
import { ProductDetailComponent } from 'src/app/shop/product-detail/product-detail.component';
import { ProductItemComponent } from 'src/app/shop/product-item/product-item.component';
import { ShopComponent } from 'src/app/shop/shop.component';
import { IndexComponent } from './index.component';

const routes: Routes = [


    ]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
