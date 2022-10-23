import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailDto } from '../models/cardetail';
import { CarImage } from '../models/CarImage';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private httpClient:HttpClient) { }
  //https://localhost:44340/uploads/images/0724ebbb-bb59-4793-8416-136482681080.jpg
  apiUrl="https://localhost:44340/api/CarImages/getall"
  getImages():Observable<ListResponseModel<CarImage>> {
    return this.httpClient.get<ListResponseModel<CarImage>>(this.apiUrl);
  }

}
