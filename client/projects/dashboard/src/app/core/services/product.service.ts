import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = 'https://localhost:44300/api/'
  constructor(private http: HttpClient) { }


  postProduct(product:IProduct){

    return this.http.post(this.baseUrl + 'products', product);
  }
  deleteProduct(id:number){

    return this.http.delete(this.baseUrl + 'products/'+id);
  }
  putProduct(product:IProduct,id:number){

    return this.http.put(this.baseUrl + 'products/'+ id, product);
  }
}

