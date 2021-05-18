import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IProduct } from '../shared/models/product';
import { ShopParams } from '../shared/models/shopParams';
import { ShopService } from '../shop/shop.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  products: IProduct[];

  shopParams = new ShopParams();
  constructor(private shopService:ShopService) { }
  ngOnInit(): void {

    this.getProducts();
    console.log(this.products);
  }


  getProducts(){

    this.shopService.getProducts(this.shopParams).subscribe( response =>{
      this.products=response.data;
      console.log(this.products);



   }, error=> {

     console.log(error)
   })
 }





}
