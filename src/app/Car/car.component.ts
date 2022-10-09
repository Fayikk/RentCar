import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../models/Car';
import { CarService } from '../Services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars : Car[]=[];
  dataLoaded=false;

  constructor(private carService:CarService,private activatedRoute:ActivatedRoute) { }
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

}
