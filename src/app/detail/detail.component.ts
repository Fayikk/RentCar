import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailDto } from '../models/cardetail';
import { DetailService } from '../Services/detail.service';
import { ImageService } from '../Services/image.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  details:CarDetailDto[]=[]
  carDetailDto:CarDetailDto


  constructor(private detailService:DetailService,private activatedRoute:ActivatedRoute,private imageService:ImageService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarByDetail(params["carId"])
      }else{
        this.getDetails()
      }
    })
  }

  getDetails(){
    this.detailService
    .getDetails().
    subscribe(response=>{this.details=response.data});
  }


  getCarByDetail(carId:number){

    this.detailService.getCarByDetail(carId)
    .subscribe(response=>{this.carDetailDto=response.data;
   });
   
   }
}
