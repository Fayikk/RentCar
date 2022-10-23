import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

import { Car } from '../models/Car';
import { CarDetailDto } from '../models/cardetail';
// import { CarResponseModel } from '../models/CarResponseModel';
import { ListResponseModel } from '../models/ListResponseModel';
import { ResponseModel } from '../models/ResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  // https://localhost:44340/api/Cars/Added
//https://localhost:44340/api/Cars/CarDetail?carId=3

  apiUrl="https://localhost:44340/api"
  constructor(private httpClient:HttpClient,
              private toastrService:ToastrService) { }

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

  add(car:Car):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"/Cars/Added",car)//burada hangi adrese ne göndereyim anlamına gelmektedir.
  }
 
}

