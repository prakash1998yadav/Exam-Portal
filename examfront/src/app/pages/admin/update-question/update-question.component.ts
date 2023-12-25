import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { QuestionService } from 'src/services/question.service';
import Swal from 'sweetalert2';
import { __makeTemplateObject } from 'tslib';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {

  public Editor = ClassicEditor;
  question : any;
  qId : any;
  constructor( private _route : ActivatedRoute, private quesService : QuestionService, private router :Router) { }

  ngOnInit(): void {
    this.qId=this._route.snapshot.params['qid'];
    this.quesService.getQuestionByQuesId(this.qId).subscribe(
      (data : any)=>{
        this.question=data;
      }
    )
  }

  updateQuestion(){
    this.quesService.updateQuestion(this.question).subscribe(
    (data : any)=>{
      Swal.fire('Success',"Question Updated","success");
      this.router.navigateByUrl("/admin/quizzes")
    }
    )
  }

}
