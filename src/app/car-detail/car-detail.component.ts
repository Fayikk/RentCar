import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CarDetailDto } from '../models/cardetail';
import { CarImage } from '../models/CarImage';
import { ListResponseModel } from '../models/ListResponseModel';
import { ImageService } from '../Services/image.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  details:CarDetailDto[]=[]
  images:CarImage[]=[]
  currentDetail: CarDetailDto={brandName:"",carId:0,carImage:[],carName:"",colorId:0,colorName:"",dailyPrice:0,modelYear:""}
  constructor(private imageService:ImageService,private httpClient:HttpClient,private activatedRoute:ActivatedRoute) { }
  imagee:string="https://localhost:44340/uploads/images/"
 
  ngOnInit(): void {
    this.getImages()
  }
  getImages(){
    this.imageService
    .getImages().
    subscribe(response=>{this.images=response.data});
  }
  
   setCurrentDetail(details:CarDetailDto){//değiştirilen det eedilen veriler için kullanılmaktadır.
    this.currentDetail = details;
  }

  getCurrentDetailClass(detail:CarDetailDto){//get edilen veriler için kullanılmaktadır
    if(detail == this.currentDetail){
      return "list-group-item active"
    }
    else{
      return "list-group-item"

    }
  }
  getAllDetailClass(){
    if (!this.currentDetail) {
      return "list-group-item active"
      
    }else{
      return "list-group-item"

    }
  }
}
