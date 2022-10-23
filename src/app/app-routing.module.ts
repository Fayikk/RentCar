import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { CarComponent } from './Car/car.component';
import { DetailComponent } from './detail/detail.component';
import { LoginGuard } from './guards/login.guard';
import { ImageComponent } from './image/image.component';
import { LoginComponent } from './login/login.component';
import { ProductAddComponent } from './product-add/product-add.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent},//Birşey verilmezse ana sayfamda ne olsun anlamıan gelemktedir.
  {path:"Cars",component:CarComponent},
  {path:"Cars/color/:colorId",component:CarComponent},
  {path:"Cars/Added",component:ProductAddComponent,canActivate:[LoginGuard]},
  {path:"login",component:LoginComponent},
  {path:"detail",component:CarDetailComponent},
  {path:"Cars/:Id",component:ImageComponent},
  {path:"deneme",component:DetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
