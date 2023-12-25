import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router, RouterLink } from '@angular/router';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginData ={
    "username":"",
    "password":""
  }
  constructor( private snack : MatSnackBar, private loginService : LoginService, private route : Router) { }

  ngOnInit(): void {
  }

  formSubmit(){
    console.log("Login button clicked");

    if(this.loginData.username.trim()=='' || this.loginData.username==null)
    {
      this.snack.open('Username is required !! ', '', {
        duration : 3000,
      });
      return;
    }
    
    if(this.loginData.password.trim()=='' || this.loginData.password==null)
    {
      this.snack.open('Password is required !! ', '', {
        duration : 3000,
      });
      return;
    }
    

    // Generating token for user validation
    this.loginService.generateToken(this.loginData).subscribe(
      (data : any)=>{
        console.log("Success");
        console.log(data);

        //login process start
        

        this.loginService.loginUser(data.jwtToken);

        this.loginService.getCurrentUser().subscribe(
          ( user :any)=> {
            this.loginService.setUser(user);
            console.log(user);

            // now user is authenticated
            // Redirect  .... ADMIN : Admin- Dashboard
            // Redirect ..... NORMAL : Normal-Dashboard

            if(this.loginService.getUserRole()=='ADMIN')
            {
              // Admin dashboard
             
              this.route.navigateByUrl('/admin');
              this.loginService.loginStatusSubject.next(true);
            //  window.location.href='/admin';
            }
            else if(this.loginService.getUserRole()=='NORMAL')
            {
              // User Dashboard
              console.log("User");
              
              this.route.navigateByUrl('/user-dashboard/0');
              this.loginService.loginStatusSubject.next(true);
             // window.location.href='/user-dashboard';
            }
            else{
              this.loginService.logout();
            }

          },
          (error)=>{
            console.log("Error");
           
          }
        );
      },
      
        (error)=>{
        console.log("Error");
        console.log(error);
        this.snack.open("Invalid Details !! try Again ",'',{
          duration : 3000
        });
        }
      
    )

  }

}
