import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { ModuleModule } from './module/module.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    ModuleModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
