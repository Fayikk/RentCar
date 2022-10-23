import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from '../models/Car';
import { CarService } from '../Services/car.service';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  
  cars : Car[]=[];
  dataLoaded=false;
  filterText="";
  constructor(private carService:CarService,private activatedRoute:ActivatedRoute
              ,private toastrService:ToastrService,private cartService:CartService) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["colorId"]){
        this.getCarsByColor(params["colorId"])
      }else{
        this.getCars()
      }
    })
  }

  getCars(){
    this.carService
    .getCars().
    subscribe(response=>{this.cars=response.data});
    this.dataLoaded=true;

  }

  getCarsByColor(colorId:number){

    this.carService.getCarsByColor(colorId)
    .subscribe(response=>{this.cars=response.data;
     this.dataLoaded=true;
   });
   
   }
   addToCart(car:Car){//addToCart ile ekleme işlemlerini gerçekleştiriyoruz.

    if(car.carId===1){
      this.toastrService.error("Bu Ürün Sepete Eklenemez",car.carName)
    }
    else{
      this.toastrService.success("Sepete Eklendi.",car.carName)
      this.cartService.addToCart(car);
    
    }
    
     }
}
