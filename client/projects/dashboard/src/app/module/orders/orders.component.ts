import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/shared/models/order';
import { OrderService } from '../../core/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styles: [
  ]
})


export class OrdersComponent implements OnInit {

  orders: IOrder[];

  constructor(private orderService : OrderService) { }

  ngOnInit(): void {
    this.orderService.getOrders().subscribe(
      (data:IOrder[])=>{console.log(data);
      this.orders = data;
      }
      )
  }

}
