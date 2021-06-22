import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBrand } from '../shared/models/brand';
import { IPagination } from '../shared/models/pagination';
import { IType } from '../shared/models/productType';
import { map } from 'rxjs/operators';
import { ShopParams } from '../shared/models/shopParams';
import { IProduct } from '../shared/models/product';
import { IReview } from '../shared/models/review';
import { ToastrService   } from 'ngx-toastr';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient,private toastr: ToastrService) { }

  getProducts(shopParams: ShopParams) {
    let params = new HttpParams();

    if (shopParams.brandId !== 0) {
      params = params.append('brandId', shopParams.brandId.toString())
    }

    if (shopParams.typeId !== 0) {
      params = params.append('typeId', shopParams.typeId.toString())
    }

    if (shopParams.search) {
      params = params.append('search', shopParams.search)
    }
    params = params.append('sort', shopParams.sort);
    params = params.append('pageIndex', shopParams.pageNumber.toString());
    params = params.append('pageSize', shopParams.pageSize.toString());
    params = params.append('minPrice', shopParams.minPrice.toString());

    return this.http.get<IPagination>(this.baseUrl + 'products', { observe: 'response', params })
      .pipe(
        map(response => {
          return response.body;
        })
      )
  }
  getProduct(id : number){
    return this.http.get<IProduct>(this.baseUrl + 'products/' + id);
  }

  getBrands() {
    return this.http.get<IBrand[]>(this.baseUrl + 'products/brands');
  }

  getTypes() {
    return this.http.get<IType[]>(this.baseUrl + 'products/types');
  }
  getReviews(id : number) {
    return this.http.get<IReview[]>(this.baseUrl + 'review/' + id);
  }
  postReviews(review:IReview){
    console.log("postReviews")

    return this.http.post(this.baseUrl + 'review', review);


  }
}
