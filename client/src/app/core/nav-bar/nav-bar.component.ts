import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/account/account.service';
import { BasketService } from 'src/app/basket/basket.service';
import { IBasket, IBasketItem, IBasketTotals } from 'src/app/shared/models/basket';
import { IProduct } from 'src/app/shared/models/product';
import { ShopParams } from 'src/app/shared/models/shopParams';
import { IUser } from 'src/app/shared/models/user';
import { SearchBarService } from 'src/app/shared/services/search-bar.service';
import { ShopService } from 'src/app/shop/shop.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],

})
export class NavBarComponent implements OnInit {


  products: IProduct[];
  basket$: Observable<IBasket>
  basketTotals$: Observable<IBasketTotals>;
  currentUser$: Observable<IUser>;

  constructor(private router : Router,private basketService : BasketService,private accountService : AccountService) { }

  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
    this.currentUser$ = this.accountService.currentUser$;
    this.basketTotals$ = this.basketService.basketTotal$;
  }

  removeBasketItem(item: IBasketItem) {
    this.basketService.removeItemFromBasket(item);
  }
  onSearch(param: any) {

    this.router.navigate(["categories"],{ queryParams: { search: param }});

  }
  logout() {
    this.accountService.logout();
  }


}
