import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubject=new Subject<boolean>();

  constructor( private http : HttpClient) { }

  // Generating token

  public generateToken(loginData : any){
    return this.http.post(`${baseUrl}/generate-token`,loginData);
  }

  // Get the details of login person

  public getCurrentUser()
  {
    return this.http.get(`${baseUrl}/user/current-user`);
  }
  // Login user : Storing the token in local storage

  public loginUser(token : any){
    localStorage.setItem('token',token);
    // this.loginStatusSubject.next(true);
    return token;
  }

  // is user login or not  : user is logged in or not

  public isLoggedIn(){
    
    let tokenstr=localStorage.getItem("token");
    if(tokenstr == undefined || tokenstr==null || tokenstr=='')
    {
      return false;
    }
    else {
      return true;
    }
  }


  // Log out : romove token from local storage

  public logout(){
    localStorage.removeItem("token");
    localStorage.removeItem('user');
    return true;
  } 

  // Get token

  public getToken(){
    return localStorage.getItem("token");
  }

  // store user detail in the local storage so we don't need to call the bacend again and again

  public setUser(user: any)
  {
    localStorage.setItem("user",JSON.stringify(user));
    return true;
  }
// Get User details
  public getUser()
  {
    let userStr=localStorage.getItem("user");
    if(userStr !=null)
    {
      return JSON.parse(userStr);
    }
    else{
      this.logout();
      return null;
    }
  }

  // Get User role for security purpose

  public getUserRole()
  {
    let user=this.getUser();
    return user.authorities[0].authority;
  }
}
