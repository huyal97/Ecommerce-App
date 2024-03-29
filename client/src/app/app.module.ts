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
import { SwiperModule } from 'swiper/angular';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
// import { ErrorInterceptor } from './core/interceptors/error.interceptor';
// import { LoadingInterceptor } from './core/interceptors/loading.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeProductItemComponent,

  ],
  imports: [
    BrowserModule,
    ShopModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SwiperModule


  ],
  exports:[],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide:LocationStrategy, useClass:HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
