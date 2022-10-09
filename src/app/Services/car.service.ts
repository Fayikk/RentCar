import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/Car';
// import { CarResponseModel } from '../models/CarResponseModel';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl="https://localhost:44340/api"
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl+"/Cars/getAll"
    return this.httpClient
    .get<ListResponseModel<Car>>(newPath)
  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl +"/Cars/GetByColorId?id="+colorId
    return this.httpClient.
    get<ListResponseModel<Car>>(newPath)
    //gelen datayı productresponsemodele map edeceksin anlamına gelmektedir. 
  } 
}
