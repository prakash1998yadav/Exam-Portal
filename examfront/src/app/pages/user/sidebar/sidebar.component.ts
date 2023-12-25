import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/services/category.service';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  categories : any={};
  constructor( private _catService : CategoryService, private snack : MatSnackBar) { }

  ngOnInit(): void {
    this._catService.getAllCategory().subscribe(
      (data)=>{
        this.categories=data;
      },
      (error)=>{
        this.snack.open('Error in loading categories form server ','',{
          duration : 3000,
        });
        console.log(error);
      }
    )
  }

}
