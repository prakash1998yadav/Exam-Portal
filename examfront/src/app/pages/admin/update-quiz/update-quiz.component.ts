import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/services/category.service';
import { QuizService } from 'src/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {

  quiz: any ;
  qId : any;
  category :any =[];
  constructor( private route : ActivatedRoute, private quizServie : QuizService, private categoryService : CategoryService, private router :Router) { }

  ngOnInit(): void {
    this.qId=this.route.snapshot.params['qid'];
    this.quizServie.getSingleQuiz(this.qId).subscribe(
      (data : any)=>
      {
        this.quiz=data;
        console.log(this.quiz);
      },
      (error)=>
      {
        console.log(error);
      }
      
    )
    this.categoryService.getAllCategory().subscribe(
      (data)=>
      {this.category=data;
      }
    )
   

    //alert(this.qId);
  }

  updateQuiz()
  {
    return this.quizServie.updateQuiz(this.quiz).subscribe(
      (data : any)=>{
        Swal.fire('Success !!', "Quiz Updated Successfully",'success');
        this.router.navigateByUrl('admin/quizzes');
      },
      (error)=>
      {
        Swal.fire('Error', 'Error in updating quiz','error');
      }
    )
  }

}
