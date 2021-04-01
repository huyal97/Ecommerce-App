import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IProduct } from 'src/app/shared/models/product';
import { ShopParams } from 'src/app/shared/models/shopParams';
import { SearchBarService } from 'src/app/shared/services/search-bar.service';
import { ShopService } from 'src/app/shop/shop.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  
  @ViewChild('search', {static: true}) searchTerm: ElementRef;
  products: IProduct[];
  constructor(private searchBarService: SearchBarService) { }
  
  ngOnInit(): void {
  }

  onSearch() {
    this.searchBarService.searchParameters = new ShopParams();
    this.searchBarService.searchParameters.search = this.searchTerm.nativeElement.value;    
    this.searchBarService.getProductsFn;
  }
  

}
