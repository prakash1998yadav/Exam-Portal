import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {



  constructor( private userService : UserService, private snack :MatSnackBar,private router :Router) { }

  public user={
    username : '',
    firstName : '',
    lastName : '',
    password : '',
    phone :'',
    email : ''
  }

  ngOnInit(): void {
  }
  formSubmit() {

    console.log(this.user);
    if(this.user.username=='' || this.user.username==null)
    {
      //alert('Username is required');
      this.snack.open("Username is required !! ",'', {duration:3000});
      return;
    }

    // Calling method of userservice to add new user
    this.userService.addUser(this.user).subscribe(
      (data : any)=>
      {
        // On success
        console.log(data);
        Swal.fire("User Registerd "," Your Username is "+ data.username,"success");
        this.router.navigate(['login']);

        
      },
      (error)=>
      {
        // on error
        console.log(error);
        this.snack.open("Something went wrong !! "+error.error.message,'', {duration:3000});
      }
      );
    }
}
