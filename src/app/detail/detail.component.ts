import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailDto } from '../models/cardetail';
import { CarImage } from '../models/CarImage';
import { DetailService } from '../Services/detail.service';
import { ImageService } from '../Services/image.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private detailService:DetailService,private activatedRoute:ActivatedRoute,
    private imageService:ImageService) { }
  detail:CarDetailDto[]=[]
  Image:CarImage[]=[]
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["colorId"]){
        this.getCarDetail(params["colorId"])
      }else{
        this.getImages()
      }
    })
  }

   getImages(){
    this.imageService
    .getImages().
    subscribe(response=>{this.Image=response.data});
  }
 getCarDetail(carId:number){

    this.detailService.getCarDetail(carId)
    .subscribe(response=>{this.detail=response.data;
   });
   
   }
   
}
