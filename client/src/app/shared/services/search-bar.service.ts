import { Injectable } from '@angular/core';
import { ShopParams } from '../models/shopParams';

@Injectable({
  providedIn: 'root'
})
export class SearchBarService {
  searchParameters= new ShopParams();
  getProductsFn: void;

  constructor() { }
}
