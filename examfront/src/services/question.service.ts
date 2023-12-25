import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor( private http : HttpClient) { }

  public getQuestionsOfQuiz(qId  : any){
    return this.http.get(`${baseUrl}/question/quiz/all/${qId}`);
  }
  public getQuestionByQuesId(quesId : any){
    return this.http.get(`${baseUrl}/question/${quesId}`);
  }

  public addQuestion(question : any, quiz : any)
  {
    const requestBody = {
      quiz: quiz,
      question: question,
    };
    console.log("rendering")
    console.log("question", question)
    return this.http.post(`${baseUrl}/question/add-question`,requestBody);
  }
  public deleteQuestion(que : any){
    return this.http.delete(`${baseUrl}/question/${que}`);
  }

  public updateQuestion(ques : any){
    return this.http.put(`${baseUrl}/question/update-question`,ques);
  }
}
