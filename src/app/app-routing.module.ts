import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './Car/car.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent},//Birşey verilmezse ana sayfamda ne olsun anlamıan gelemktedir.
  {path:"Cars",component:CarComponent},
  {path:"Cars/color/:colorId",component:CarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
