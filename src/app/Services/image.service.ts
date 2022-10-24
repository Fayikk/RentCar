import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailDto } from '../models/cardetail';
import { CarImage } from '../models/image';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  // image : CarImage[]=[]
  apiUrl="https://localhost:44340/api/CarImages/getall"

  constructor(private httpClient:HttpClient) { }


 

  getImages():Observable<ListResponseModel<CarImage>>{
    return this.httpClient
    .get<ListResponseModel<CarImage>>(this.apiUrl)
  }

  
}

 
