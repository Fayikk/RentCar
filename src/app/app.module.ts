import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NaviComponent } from './navi/navi.component';
import {HttpClientModule} from "@angular/common/http"//import ediyoruz
import { ColorComponent } from './Color/color.component';
import { CarComponent } from './Car/car.component';
import { BrandComponent } from './Brand/brand.component';

@NgModule({
  declarations: [
    AppComponent,
    // ColorComponent,
    // CarComponent,
    // BrandComponent,
    ColorComponent,
    // NaviComponent
    CarComponent,
    BrandComponent,
    NaviComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
