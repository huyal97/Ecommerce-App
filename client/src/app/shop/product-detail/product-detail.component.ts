import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasketService } from 'src/app/basket/basket.service';
import { IProduct } from 'src/app/shared/models/product';
import { IReview } from 'src/app/shared/models/review';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product : IProduct;
  reviews : IReview[];
  rating :number;
  constructor(private shopService : ShopService,private activatedRoute : ActivatedRoute,private basketService: BasketService) { }

  ngOnInit(): void {

      this.loadProduct()
      this.loadReviews();



  }
  findAverageRating(){
    var result = this.reviews.map(a => a.rating);
    var averageFunc = (result) => result.reduce((a, b) => a + b) / result.length;
    var average = averageFunc(result);
    console.log(average);
    return average;


  }
  addItemToBasket() {
    this.basketService.addItemToBasket(this.product);
  }
  loadProduct(){
    this.shopService.getProduct(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe(product =>{
      this.product = product;
    }, error => {
      console.log(error)
    })
  }
  loadReviews(){

    this.shopService.getReviews(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe(reviews =>{
      this.reviews=reviews;
      this.rating = this.findAverageRating();
      console.log(this.reviews);
    }, error => {
      console.log(error)
    } )
  }

}
