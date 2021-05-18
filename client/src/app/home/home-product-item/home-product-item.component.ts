import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/models/product';

@Component({
  selector: 'app-home-product-item',
  templateUrl: './home-product-item.component.html',
  styleUrls: ['./home-product-item.component.scss']
})
export class HomeProductItemComponent implements OnInit {
  @Input() product: IProduct;
  constructor() { }


  ngOnInit(): void {
    console.log(this.product);
  }


}
