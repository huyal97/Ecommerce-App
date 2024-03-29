import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterModule } from '@angular/router';
import { BasketModule } from '../basket/basket.module';
import { ReviewComponent } from './review/review.component';
import { StarRatingComponent } from './review/star-rating/star-rating.component';
import {MatSliderModule} from '@angular/material/slider';




@NgModule({
  declarations: [ShopComponent, ProductItemComponent, ProductDetailComponent, ReviewComponent, StarRatingComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    SharedModule,
    RouterModule,
    MatSliderModule


  ],
  exports: [ShopComponent, ProductItemComponent]
})
export class ShopModule { }
