import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoryService } from 'src/services/category.service';
import { QuizService } from 'src/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {
  quiz :any={
    'title': "",
  'description' :"",
    'maxMarks' : "",
    'numberOfQuestions' :"",
    'active' : true,
    'category':{
      'cid':'',
    }

  }
  category :any=[]
   
  
  constructor( private quizService : QuizService, private router : Router, private _cat : CategoryService, private snack : MatSnackBar) { }

  ngOnInit(): void {
    this._cat.getAllCategory().subscribe(
      (data : any)=>{
        // On success get all category
        this.category=data;
        console.log(data);
      },
      (error)=>
      {
        console.log(error);
        Swal.fire('Error !!','Error in loading data','error')
      }
    )
  }

  formSubmit(){

    if(this.quiz.title.trim()=="" || this.quiz.title==null)
    {
      this.snack.open("Please enter valid title");
    }
    else if(this.quiz.description.trim()=="" || this.quiz.description==null)
    {
      this.snack.open("Please enter valid values",'',{duration:3000});
    }
    else if(this.quiz.maxMarks==null)
    {
      this.snack.open("please enter the marks",'',{duration:3000});
    }
    else if(this.quiz.numberOfQuestions==null)
    {
      this.snack.open("please enter the number of questions",'',{duration:3000});
    }
    else{

    this.quizService.addQuiz(this.quiz).subscribe(
      (data)=>{
        
        Swal.fire('Success','Quiz Added','success');
        this.router.navigateByUrl('admin/quizzes');
      },
      (error)=>
      {
        Swal.fire('Error','Error while adding quiz','error');
        console.log(error);
      }
      );
    }

    
  }

}
