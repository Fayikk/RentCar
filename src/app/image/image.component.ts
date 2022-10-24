import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from '../models/image';
import { ImageService } from '../Services/image.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  images:CarImage[]=[]
  currentImage : CarImage 
  constructor(private imageService:ImageService,private activatedRoute:ActivatedRoute,private httpClient:HttpClient) { }
  imagee:string="https://localhost:44340/uploads/images/"
  ngOnInit(): void {
    this.getImages()
  }

  getImages(){
    this.imageService.getImages()
    .subscribe(Response=>{this.images=Response.data});
  }
  setCurrentİmage(image:CarImage){//değiştirilen det eedilen veriler için kullanılmaktadır.
    this.currentImage = image;
  }

  getCurrentImageClass(image:CarImage){//get edilen veriler için kullanılmaktadır
    if(image == this.currentImage){
      return "list-group-item active"
    }
    else{
      return "list-group-item"

    }
  }

  getAllImageClass(){
    if (!this.currentImage) {
      return "list-group-item active"
      
    }else{
      return "list-group-item"

    }
  }

}
