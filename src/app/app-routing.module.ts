import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './Car/car.component';
import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './login/login.component';
import { ProductAddComponent } from './product-add/product-add.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent},//Birşey verilmezse ana sayfamda ne olsun anlamıan gelemktedir.
  {path:"Cars",component:CarComponent},
  {path:"Cars/color/:colorId",component:CarComponent},
  {path:"Cars/Added",component:ProductAddComponent,canActivate:[LoginGuard]},
  {path:"login",component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
