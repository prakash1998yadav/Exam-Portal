import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/services/category.service';
import Swal from 'sweetalert2';
import { AddCategoryComponent } from '../add-category/add-category.component';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {

   categories:any = [
    
   ]
   
  constructor( private categoryService : CategoryService,private router : Router) { }

  ngOnInit(): void {
    this.categoryService.getAllCategory().subscribe(
      (data : any)=>
      {
        this.categories=data;
      },
      (error: any)=>
      {
        console.log(error);
        Swal.fire('Error !!','Error in loading the data !','error');
      }
    );
  }

  deleteCategory(categoryId : any)
  
  {
    Swal.fire({
      icon:'info',
      title:'Are you sure ?',
      confirmButtonText:'Delete',
      showCancelButton : true,
    }).then((result)=>{
      if(result.isConfirmed)
      {
        this.categoryService.deleteCategory(categoryId).subscribe(
          (data : any)=>{
            Swal.fire("Category deleted sucessfully");
            this.categories = this.categories.filter((c: { cid: any; }) => c.cid !== categoryId);
           // this.router.navigateByUrl("/admin/categories")
           // Swal.fire("Category deleted sucessfully",'data');
           // console.log(data);
          }
        )
      }

    })
   
   
  }
  updateCategory(categoryId: string) {
    this.router.navigate(['/admin/update-category', categoryId]);
  }
  
  
 
  

}
