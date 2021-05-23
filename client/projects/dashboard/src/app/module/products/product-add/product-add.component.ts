import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IBrand } from 'src/app/shared/models/brand';
import { IProduct } from 'src/app/shared/models/product';
import { IType } from 'src/app/shared/models/productType';
import { ShopService } from 'src/app/shop/shop.service';
import { ProductService } from '../../../core/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styles: [
  ]
})
export class ProductAddComponent implements OnInit {
  product: IProduct;
  productForm: FormGroup;
  brands: IBrand[];
  types: IType[];
  constructor(private shopService: ShopService,private productService:ProductService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getBrands();
    this.getTypes();
    this.createLoginForm();
  }

  createLoginForm() {
    this.productForm = new FormGroup({
      name: new FormControl(),
      description: new FormControl(),
      price: new FormControl(),
      pictureUrl: new FormControl(),
      productType: new FormControl(),
      productBrand: new FormControl(),
    });
  }

  getBrands() {
    this.shopService.getBrands().subscribe(response => {
      this.brands = [{id: 0, name: 'All'}, ...response];
    }, error => {
      console.log(error);
    })
  }
  getTypes() {
    this.shopService.getTypes().subscribe(response => {
      this.types = [{id: 0, name: 'All'}, ...response];
    }, error => {
      console.log(error);
    })
  }
  onSubmit(){

    this.productService.postProduct(this.productForm.value).subscribe(
      data => {
        console.log(data);
        console.log("Succelful post produc subcribe");
      this.toastr.success('Product saved');
      this.productForm.reset({name:'',describe:'',price:'',pictureUrl:'',productType:'',productBrand:''});
    }, error => {
      this.toastr.error(error.message);
      this.productForm.reset({name:'',describe:'',price:'',pictureUrl:'',productType:'',productBrand:''});

    })
  }



}
