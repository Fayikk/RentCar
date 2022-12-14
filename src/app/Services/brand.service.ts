import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/Brand';
import { ListResponseModel } from '../models/ListResponseModel';


@Injectable({
  providedIn: 'root'
})
export class BrandService {
apiUrl="https://localhost:44340/api/Brands/GetAll"
  constructor(private httpClient:HttpClient) { }
  
  getBrands():Observable<ListResponseModel<Brand>>{
    return this.httpClient
    .get<ListResponseModel<Brand>>(this.apiUrl)
  }
}
