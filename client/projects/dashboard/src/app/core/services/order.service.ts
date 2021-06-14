import { HttpClient } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import { environment } from 'projects/dashboard/src/environments/environment';
import { IOrder } from 'src/app/shared/models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }


  getOrders(){

    return this.http.get(this.baseUrl + 'Orders/all');
  }
}
