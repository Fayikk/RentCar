import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from '../models/CarImage';
import { CarService } from '../Services/car.service';
import { ImageService } from '../Services/image.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  // images : CarImage[]=[];
  
  //https://localhost:44340/uploads/images/0724ebbb-bb59-4793-8416-136482681080.jpg
  
  

  constructor(private ImageService:ImageService,private activatedRoute:ActivatedRoute,private carService:CarService) { }
  imagee:string="https://localhost:44340/uploads/images/"

  ngOnInit(): void {
    
  }
  // getImages(){
  //   this.ImageService
  //   .getImages().
  //   subscribe(response=>{this.images=response.data});
  // }

  // getCarDetail(carId:number){

  //   this.carService.getCarsByColor(carId)
  //   .subscribe(response=>{this.images=response.data;
     
  //  });
  // }
}
