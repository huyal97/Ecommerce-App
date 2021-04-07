import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BasketService } from 'src/app/basket/basket.service';
import { IBasket } from 'src/app/shared/models/basket';
import { IProduct } from 'src/app/shared/models/product';
import { ShopParams } from 'src/app/shared/models/shopParams';
import { SearchBarService } from 'src/app/shared/services/search-bar.service';
import { ShopService } from 'src/app/shop/shop.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {


  products: IProduct[];
  basket$: Observable<IBasket>

  constructor(private router : Router,private basketService : BasketService) { }

  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
  }

  onSearch(param: any) {

    this.router.navigate(["categories"],{ queryParams: { search: param }});

  }


}
