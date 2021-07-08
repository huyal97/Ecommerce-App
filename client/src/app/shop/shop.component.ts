import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';
import { IBrand } from '../shared/models/brand';
import { IProduct } from '../shared/models/product';
import { IType } from '../shared/models/productType';
import { ShopParams } from '../shared/models/shopParams';
import { ExternalScriptService } from '../shared/services/external-script.service';
import { SearchBarService } from '../shared/services/search-bar.service';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],

})
export class ShopComponent implements OnInit {
  products: IProduct[];
  brands: IBrand[];
  types: IType[];
  totalCount: Number;
  shopParams = new ShopParams();
  checkbox: any;
  loadAPI: Promise<any>;
  sortOptions = [
    {name: 'Alphabetical', value: 'name'},
    {name: 'Price: Low to high', value: 'priceAsc'},
    {name: 'Price: High to low', value: 'priceDesc'},
  ]

  constructor(private shopService: ShopService,private route: ActivatedRoute,
    private scriptService : ExternalScriptService) {

  };

  ngOnInit(): void {

    this.loadAPI = new Promise((resolve) => {
      this.scriptService.loadAllUrl();
      resolve(true);
  });

    this.route.queryParams.subscribe(queryparams =>{
      this.shopParams.search = queryparams['search'];
      this.getProducts();
    });

    this.getProducts();
    this.getBrands();
    this.getTypes();
  }

  getProducts(){

     this.shopService.getProducts(this.shopParams).subscribe( response =>{
      this.products = response.data;
      this.shopParams.pageNumber = response.pageIndex;
      this.shopParams.pageSize = response.pageSize;
      this.totalCount = response.count;

    }, error=> {
      console.log(error)
    })
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

  onTypeSelected(typeId: number) {
    this.shopParams.typeId = typeId;
    this.shopParams.pageNumber = 1;
    this.getProducts();
  }


  onBrandSelected(brandId: number) {
    this.shopParams.brandId = brandId;
    this.shopParams.pageNumber = 1;
    this.getProducts();
    console.log("Basildi" );
  }

  onSortSelected(sort:string){
    this.shopParams.sort = sort;
    this.getProducts();
  }
  onPageChanged(event: any) {
    if (this.shopParams.pageNumber !== event) {
      this.shopParams.pageNumber = event;
      this.getProducts();
    }
  }
  eventValue(value: any){
    console.log(value);

  }
  formatLabel(value: number) {

      return value + '$';
  }
  sliderValue($event){
      console.log($event);
      this.shopParams.minPrice= $event;
      this.getProducts();
  }

}
