import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NaviComponent } from './navi/navi.component';
import {HttpClientModule,HTTP_INTERCEPTORS} from "@angular/common/http"//import ediyoruz
import { ColorComponent } from './Color/color.component';
import { CarComponent } from './Car/car.component';
import { BrandComponent } from './Brand/brand.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FormsModule } from '@angular/forms'; 
import { FilterPipePipe } from './pipes/filterpipe.pipe';
// import { ToastrService } from 'ngx-toastr';
// import { ToastrModule } from 'ngx-toastr/public_api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import {ToastrModule} from "ngx-toastr";
import { ProductAddComponent } from './product-add/product-add.component';
import { LoginComponent } from './login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { CardetailComponent } from './cardetail/cardetail.component';
import { ImageComponent } from './image/image.component';


@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    CarComponent,
    BrandComponent,
    NaviComponent,
    VatAddedPipe,
    FilterPipePipe,
    CartSummaryComponent,
    ProductAddComponent,
    LoginComponent,
    CardetailComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
