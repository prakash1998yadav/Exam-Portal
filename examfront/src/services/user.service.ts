import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }
   baseUrl = "http://localhost:8080";
  
  // Adding  new User
  public addUser(user : any)
  {
   return  this.http.post(`${this.baseUrl}/user/create-user`,user);
  }
}
