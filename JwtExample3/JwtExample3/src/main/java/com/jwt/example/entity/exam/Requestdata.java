package com.jwt.example.entity.exam;

import lombok.Getter;
import lombok.Setter;


public class Requestdata {
    private Quiz quiz;
    private Question question;
	public Quiz getQuiz() {
		return quiz;
	}
	public void setQuiz(Quiz quiz) {
		this.quiz = quiz;
	}
	public Question getQuestion() {
		return question;
	}
	public void setQuestion(Question question) {
		this.question = question;
	}
	public Requestdata(Quiz quiz, Question question) {
		super();
		this.quiz = quiz;
		this.question = question;
	}
    
    

    // getters and setters
}
