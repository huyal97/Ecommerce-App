import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IOrder } from 'src/app/shared/models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  baseUrl = 'https://localhost:44300/api/'
  constructor(private http: HttpClient) { }


  getOrders(){

    return this.http.get(this.baseUrl + 'Orders/all');
  }
}
