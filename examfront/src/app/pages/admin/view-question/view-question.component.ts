import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.css']
})
export class ViewQuestionComponent implements OnInit {

  constructor(
    private _route : ActivatedRoute,
    private quesService : QuestionService
  ) { }

  qId : any;
  qTitle : any;
  questions : any=[];

  ngOnInit(): void {
    this.qId=this._route.snapshot.params['qid'];
    this.qTitle=this._route.snapshot.params['title'];
    
    this.quesService.getQuestionsOfQuiz(this.qId).subscribe(
      (data : any)=>{
        this.questions=data;
      },
      (error)=>
      {
        Swal.fire('Error !! ','Error in loading questions','error');
        console.log(error);
      }
      )
    

  }

  deleteQuestion(questionid : any)
  {
    Swal.fire({
      icon:'info',
      title:'Are you sure ?',
      confirmButtonText:'Delete',
      showCancelButton : true,
    }).then((result)=>{
      if(result.isConfirmed)
      {
        this.quesService.deleteQuestion(questionid).subscribe(
          (data : any)=>{
           
            this.questions = this.questions.filter((q: { quesId: any; }) => q.quesId !== questionid);
            Swal.fire("Category deleted sucessfully");
          }
        );
        }
        })
      }
    }
      


