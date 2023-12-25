import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoryService } from 'src/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  category :any= {
    'title':"",
    'description':""
  }
  constructor( private categorySevice : CategoryService,private router : Router,private snack : MatSnackBar) { }

  ngOnInit(): void {
  }
  formSubmit()
  {
    if(this.category.title.trim()=="" || this.category.title==null)
    {
      this.snack.open("Please enter valid values");
    }
    else if(this.category.description.trim()=="" || this.category.description==null)
    {
      this.snack.open("Please enter valid values",'',{duration:3000});
    }
    else{
    console.log(this.category)
    this.categorySevice.addCategory(this.category).subscribe(
      (data :any)=>{
        console.log(data);
        Swal.fire("Category Added");
        this.router.navigateByUrl('admin/categories');
      }
    )
    }
    console.log("Added")
  }

}
