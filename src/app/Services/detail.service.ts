import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailDto } from '../models/cardetail';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor(private httpClient:HttpClient) { }
  //https://localhost:44340/api/Cars/CarDetail?carId=3
  apiUrl="https://localhost:44340/api"
  getCarDetail(carId:number):Observable<ListResponseModel<CarDetailDto>>{
    let newPath = this.apiUrl+"/Cars/CarDetail?carId="+carId
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath)
  }
}
