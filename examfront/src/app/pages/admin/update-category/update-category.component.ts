import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  category :any= [];
  constructor( private categorySevice : CategoryService,private router : Router,private snack : MatSnackBar,  private route : ActivatedRoute) { }

   cid : any ;

  ngOnInit(): void {
    this.cid=this.route.snapshot.params['id'];
    this.categorySevice.getSingleCategory(this.cid).subscribe(
      (data : any)=>
      {
        this.category=data;
        console.log(this.category);
      },
      (error)=>
      {
        console.log(error);
      }
      
    )
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
      this.categorySevice.updateCategory(this.category).subscribe(
        (data: any)=>
        {
          Swal.fire('Success !!', "Category Updated Successfully",'success');
          this.router.navigateByUrl('admin/categories');
        },
        (error)=>
        {
          Swal.fire('Error', 'Error in updating category','error');
        }
      )
      }
     
    }
  

}



