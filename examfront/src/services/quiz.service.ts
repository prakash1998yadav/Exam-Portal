import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {


  constructor( private http : HttpClient) { }

  public getAllQuiz()
  {
    return  this.http.get(`${baseUrl}/quiz/all-quizzes`);
  }

  public addQuiz( quiz : any){
    return this.http.post(`${baseUrl}/quiz/add-quiz`, quiz);
  }
  public deleteQuiz(quizId : any)
  {
    console.log("deleting");
    return this.http.delete(`${baseUrl}/quiz/${quizId}`);
  }
  // get single quiz

  public getSingleQuiz(qId : any)
  {
   // console.log(`${baseUrl}/quiz/${qId}`);
    return this.http.get(`${baseUrl}/quiz/${qId}`);
  }
  public updateQuiz(quiz : any)
  {
    console.log("Quiz adding")
    return this.http.put(`${baseUrl}/quiz/update-quiz`,quiz);
  }
  
  // Get quizzess of category
  public getQuizzessOfCategory(cid : any)
  {
    return this.http.get(`${baseUrl}/quiz/category/${cid}`)
  } 

  // Get active Quizzess
  public getActiveQuizzess(){
    return this.http.get(`${baseUrl}/quiz/active`);
  }

  // Get quizzess by category and active
  public getQuizzessOfActiveCategory(cid : any){
    return this.http.get(`${baseUrl}/quiz/category/active/${cid}`);
  }
}
