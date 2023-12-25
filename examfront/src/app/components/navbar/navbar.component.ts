import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn=false;
  user : any=null;

  constructor( public login : LoginService,private router : Router) { 
    
  }

  ngOnInit(): void {
    this.isLoggedIn=this.login.isLoggedIn();
    this.user=this.login.getUser();
    this.login.loginStatusSubject.asObservable().subscribe(data =>{
      this.isLoggedIn=this.login.isLoggedIn();
    this.user=this.login.getUser();
    })
  }
  logout()
  {

    this.login.logout();
    //this.router.navigate(['login']);
     this.isLoggedIn=false;
     this.user=null;
    
    window.location.reload();
  }


}
