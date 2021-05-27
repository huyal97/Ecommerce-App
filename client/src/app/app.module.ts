import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ShopModule} from './shop/shop.module';
import {CoreModule} from './core/core.module';
import { AppRoutingModule } from './app-routing.module';

import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HomeProductItemComponent } from './home/home-product-item/home-product-item.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { IndexComponent } from './layout/index/index.component';
import { IndexModule } from './layout/index/index.module';
import { SwiperModule } from 'swiper/angular';
// import { ErrorInterceptor } from './core/interceptors/error.interceptor';
// import { LoadingInterceptor } from './core/interceptors/loading.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeProductItemComponent,
    DashboardComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    ShopModule,
    IndexModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SwiperModule


  ],
  exports:[SwiperModule],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
