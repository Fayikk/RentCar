import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailDto } from '../models/cardetail';
import { ListResponseModel } from '../models/ListResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor(private httpClient:HttpClient) { }
  //https://localhost:44340/api/Cars/CarDetail?carId=3
  apiUrl="https://localhost:44340/api"

  
  getDetails():Observable<ListResponseModel<CarDetailDto>>{
    return this.httpClient
    .get<ListResponseModel<CarDetailDto>>(this.apiUrl)
  }
  getCarByDetail(carId:number):Observable<SingleResponseModel<CarDetailDto>>{
    let newPath = this.apiUrl +"/Cars/CarDetail?carId="+carId
    return this.httpClient.
    get<SingleResponseModel<CarDetailDto>>(newPath)
    //gelen datayı productresponsemodele map edeceksin anlamına gelmektedir. 
  } 
 
}
