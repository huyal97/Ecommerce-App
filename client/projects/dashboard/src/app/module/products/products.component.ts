import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IProduct } from 'src/app/shared/models/product';
import { ShopParams } from 'src/app/shared/models/shopParams';
import { ShopService } from 'src/app/shop/shop.service';
import { ProductService } from '../../core/services/product.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [
  ]
})
export class ProductsComponent implements OnInit {
  products: IProduct[];

  product: IProduct = {
    "id": 0,
  "name": "string",
  "description": "string",
  "price": 0,
  "pictureUrl": "string",
  "productType": "string",
  "productBrand": "string"}
  ;
  productProperties: string[];
  shopParams = new ShopParams();
  constructor(private shopService : ShopService,private productService: ProductService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getProducts();
    this.productProperties= Object.keys(this.product);
    console.log(this.productProperties);
  }
  getProducts(){

    this.shopParams.pageSize = 150
    this.shopService.getProducts(this.shopParams).subscribe( response =>{
     this.products = response.data;
     console.log(this.products)

   }, error=> {
     console.log(error)
   })
 }
 deleteProduct(int:number){
   this.productService.deleteProduct(int).subscribe(()=>{this.toastr.success("Product is Deleted");
  this.getProducts();});
 }
}
