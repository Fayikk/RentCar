import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
//https://localhost:44340/api/Auth/login
//https://localhost:44340/api/Auth/register
apiUrl="https:localhost:44340/api/Auth/"
  constructor(private httpClient:HttpClient) { }
  login(user:LoginModel){
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"login",user)
  }

  isAuthenticated(){
    if (localStorage.getItem("token")) {
      return true;
    }
    else{
      return false;
    }
  }
}