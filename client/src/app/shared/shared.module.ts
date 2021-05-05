import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PagingHeaderComponent } from './components/paging-header/paging-header.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { BasketSummaryComponent } from './components/basket-summary/basket-summary.component';
import { OrderTotalsComponent } from './components/order-totals/order-totals.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ PagingHeaderComponent,TextInputComponent,BasketSummaryComponent, OrderTotalsComponent,StepperComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CdkStepperModule,
    RouterModule
  ],
  exports:[
    PagingHeaderComponent,
    TextInputComponent,
    ReactiveFormsModule,
    BasketSummaryComponent,
    OrderTotalsComponent,
    StepperComponent,
    CdkStepperModule

  ]
})
export class SharedModule { }
