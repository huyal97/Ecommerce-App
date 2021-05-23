import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { HomeModule } from './home/home.module';
import { ProductsComponent } from './products/products.component';
import { ProductsModule } from './products/products.module';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    HomeModule,
    ProductsModule,
    SharedModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true

    })
  ]
})
export class ModulesModule { }
