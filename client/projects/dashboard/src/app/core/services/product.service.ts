import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IProduct } from 'src/app/shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = 'https://localhost:44300/api/'
  constructor(private http: HttpClient,private toastr: ToastrService) { }


  postProduct(product:IProduct){
    console.log("postReviews")
    return this.http.post(this.baseUrl + 'products', product);
  }
}
