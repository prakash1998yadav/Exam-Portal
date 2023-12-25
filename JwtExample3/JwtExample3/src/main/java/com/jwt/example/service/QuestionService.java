package com.jwt.example.service;

import java.util.Set;

import com.jwt.example.entity.exam.Question;
import com.jwt.example.entity.exam.Quiz;

public interface QuestionService {
	
	public Question addQuestion(Question ques);
	public Question updateQuestion(Question ques);
	public Set<Question> getAllQuestions();
	public Question getQuestion(Long quesId);
	public void deleteQuestion(Long quesId);
	public Set<Question> getQuestionsOfQuiz(Quiz quiz);

}
