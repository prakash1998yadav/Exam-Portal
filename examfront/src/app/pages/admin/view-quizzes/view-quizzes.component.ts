import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from 'src/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {
  

  quizzes : any =[];

  

  constructor(private _quiz : QuizService, private router : Router) { }

  ngOnInit(): void {
    this._quiz.getAllQuiz().subscribe(
      (data : any)=>{
        this.quizzes=data;
        console.log(data);

      },
      (error)=>{
        console.log(error);
        Swal.fire('Error','Error in loading the data','error');
      }
    )


  }
  deleteQuiz(quizId : any)
  {
    
    Swal.fire({
      icon:'info',
      title:'Are you sure ?',
      confirmButtonText:'Delete',
      showCancelButton:true,
    }).then((result)=>{
        if(result.isConfirmed)
        {
            this._quiz.deleteQuiz(quizId).subscribe(
            (data : any)=>{
              Swal.fire("Quiz deleted sucessfully");
              this.quizzes = this.quizzes.filter((q: { qid: any; }) => q.qid !== quizId);
            },
            (error)=>
            {
              Swal.fire('Error','Error in deleting the quiz',error);
            }
          )
        }
    })
  }

  updateQuiz(qId : any)
  {
    this.router.navigate(['/admin/add-quiz',qId]);
  }

}
