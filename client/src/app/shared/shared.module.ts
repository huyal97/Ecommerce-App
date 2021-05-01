import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { PagingHeaderComponent } from './components/paging-header/paging-header.component';
import { TextInputComponent } from './components/text-input/text-input.component';



@NgModule({
  declarations: [ PagingHeaderComponent,TextInputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    PagingHeaderComponent,
    TextInputComponent,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
