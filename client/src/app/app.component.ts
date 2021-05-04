import { Component } from '@angular/core';
import { BasketService } from './basket/basket.service';
import { AccountService} from './account/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  constructor(private basketService: BasketService, private accountService: AccountService) { }

  ngOnInit(): void {
    const basketId = localStorage.getItem('basket_id');
    this.loadCurrentUser();

    if (basketId) {
      this.basketService.getBasket(basketId).subscribe(() => {
        console.log('initialised basket');
      }, error => {
        console.log(error);
      })
    }
  }

  loadCurrentUser() {
    const token = localStorage.getItem('token');
    this.accountService.loadCurrentUser(token).subscribe(() => {
      console.log('loaded user');
    }, error => {
      console.log(error);
      console.log('Cant Load User');
    })
  }




}
