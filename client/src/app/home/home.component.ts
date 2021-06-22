import { AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IProduct } from '../shared/models/product';
import { ShopParams } from '../shared/models/shopParams';
import { ShopService } from '../shop/shop.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: IProduct[];
  slides2 = ["https://www.nlo.eu/sites/nlo_corp/files/styles/keyvisual/public/2018-04/adidas-trademark.jpg?h=8a65506b&itok=ppERsM5F",
    "https://www.safetyjogger.com/picture/Brands/SAFETY/1920/BALTO-BANNER.JPG?nocache=1602712800000",
  "https://www.diadora.com/on/demandware.static/-/Library-Sites-SiteGenesisSharedLibrary/default/dwb8cdfe26/images/homepage/subHomeUtility/massdamper_desktop.jpg",
  ];
  pagination: any = false;
  shopParams = new ShopParams();
  constructor(private shopService:ShopService) { }

  ngOnInit(): void {

    this.getProducts();
    console.log(this.products);

  }
  onSwiper(swiper) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
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
