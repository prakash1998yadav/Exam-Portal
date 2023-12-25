import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/services/question.service';
import { QuizService } from 'src/services/quiz.service';
import Swal from 'sweetalert2';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  public Editor = ClassicEditor;
  qId : any;
  qTitle : any ;
  
 
  quiz : any={
    
  }
  question ={
    quiz:{
      qId:''
    },
    content :'' ,
    option1 :'',
    option2 :'',
    option3 :'',
    option4 :'',
    answer : ''};
    constructor( private _route : ActivatedRoute, private quesService : QuestionService, private quizService : QuizService, private router : Router) { }

  ngOnInit(): void {
    this.qId=this._route.snapshot.params['qid'];
    this.qTitle=this._route.snapshot.params['title'];
    this.question.quiz.qId=this.qId;
    console.log( "qUIZ ID "+this.question.quiz['qId']);
    this.quizService.getSingleQuiz(this.qId).subscribe(
    (data)=>{
      this.quiz=data;
    }
    )
  }

  addQuestions()
  {
    if(this.question.content.trim()==''  || this.question.content== null)
    {
      return ;
    }
    if(this.question.option1.trim()==''  || this.question.option1== null)
    {
      return ;
    }
    if(this.question.option2.trim()==''  || this.question.option2== null)
    {
      return ;
    }
    if(this.question.answer.trim()==''  || this.question.answer== null)
    {
      return ;
    }
    this.quesService.addQuestion(this.question,this.quiz).subscribe(
      (data)=>
      {
        console.log(data);
        Swal.fire('Success','Question Added','success');
        this.router.navigateByUrl("/admin/quizzes")
      }
    )
  }

}
