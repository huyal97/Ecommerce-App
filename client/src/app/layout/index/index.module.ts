import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IndexRoutingModule,
    SharedModule,
    CoreModule
  ],

})
export class IndexModule { }
