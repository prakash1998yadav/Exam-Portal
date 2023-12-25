import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor( private http : HttpClient) { }

  getAllCategory(){
    return this.http.get(`${baseUrl}/category/all-category`);
  }

  getSingleCategory(cid : any){
    return this.http.get(`${baseUrl}/category/${cid}`)
  }
  addCategory(category : any)
  {
    return this.http.post(`${baseUrl}/category/add-category`,category);
  }
  deleteCategory(categoryId : any)
  {
   // console.log(`${baseUrl}/category/152`);
    return this.http.delete(`${baseUrl}/category/${categoryId}`);
  }
  updateCategory(category : any)
  {
    console.log("put mapping");
    return this.http.put(`${baseUrl}/category/update-category/`,category);
  }
}
