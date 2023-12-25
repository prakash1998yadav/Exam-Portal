import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/services/quiz.service';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit {

  constructor( private _route : ActivatedRoute , private quizService : QuizService) { }
  categoryId : any;
  quiz  : any;
  ngOnInit(): void {
    this._route.params.subscribe((params)=>{
      this.categoryId=params['catId'];
      if(this.categoryId==0)
    {
      console.log("Load All the Quiz");
      this.quizService.getActiveQuizzess().subscribe(
        (data)=>{
          this.quiz=data;
          console.log(this.quiz);
        },
        (error)=>
        {
          console.log("error");
        }
      )
    }
    else{
      console.log("Load specific quiz");
      this.quizService.getQuizzessOfActiveCategory(this.categoryId).subscribe(
        (data: any)=>{
          console.log(data);
          this.quiz=data;
        },
        (error)=>{
          console.log("Error in loading quiz")
        }
      )
    }
    })
   
  
    
  }

}
