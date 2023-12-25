package com.jwt.example.service;

import java.util.List;
import java.util.Set;

import com.jwt.example.entity.exam.Category;
import com.jwt.example.entity.exam.Quiz;

public interface QuizService {
	public Quiz addQuiz(Quiz q);
	public Quiz updateQuiz(Quiz q);
	public Set<Quiz> getQuizzes();
	public Quiz getQuiz(Long qId);
	public void deleteQuiz(Long qId);
	public List<Quiz>  getQuizzessofCategory(Category c);
	
	// Get Active quizzess
	public List<Quiz> getActiveQuiz();
	
	// Get quiz by category and and active
	public List<Quiz> getQuizByCategoryAndActive(Category c );

}
