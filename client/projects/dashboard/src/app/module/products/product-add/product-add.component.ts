import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  id: number;
  brands: IBrand[];
  types: IType[];
  isAddMode: boolean;
  constructor(private shopService: ShopService,private productService:ProductService, private route: ActivatedRoute,
    private toastr: ToastrService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    this.getBrands();
    this.getTypes();
    this.createLoginForm();
    if (this.isAddMode) {


    } else {
      this.getSingleProduct(this.id);

    }




  }


  getSingleProduct(id:number){

    this.shopService.getProduct(id).subscribe( (data)=> {
      this.product=data;
      console.log(data);
      this.updateForm();
    },error => console.log(error)
    )

  }
  updateForm(){

      this.productForm.patchValue({
        name: this.product.name,
        description: this.product.description,
        price: this.product.price,
        pictureUrl: this.product.pictureUrl,
        productType: this.product.productType,
        productBrand: this.product.productBrand,
      });

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

        if (this.isAddMode) {
            this.createProduct();
        } else {
            this.updateProduct();
        }
  }
  createProduct(){
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
  updateProduct(){
    this.productService.putProduct(this.productForm.value,this.id).subscribe(
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
