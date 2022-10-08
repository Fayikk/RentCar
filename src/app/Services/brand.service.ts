import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandResponseModel } from '../models/BrandResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
apiUrl="https://localhost:44340/api/Brands/GetAll"
  constructor(private httpClient:HttpClient) { }
  
  getBrands():Observable<BrandResponseModel>{
    return this.httpClient
    .get<BrandResponseModel>(this.apiUrl)
  }
}
