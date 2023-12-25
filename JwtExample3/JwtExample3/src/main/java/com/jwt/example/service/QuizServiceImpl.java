package com.jwt.example.service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jwt.example.entity.exam.Category;
import com.jwt.example.entity.exam.Quiz;
import com.jwt.example.repo.QuizRepository;

@Service
public class QuizServiceImpl implements QuizService{

	@Autowired
	private QuizRepository quizRepository;
	
	
	@Override
	public Quiz addQuiz(Quiz q) {
		// TODO Auto-generated method stub
		return quizRepository.save(q);
	}

	@Override
	public Quiz updateQuiz(Quiz q) {
		// TODO Auto-generated method stub
		return quizRepository.save(q);
	}

	@Override
	public Set<Quiz> getQuizzes() {
		// TODO Auto-generated method stub
		return new HashSet<>(quizRepository.findAll());
	}

	@Override
	public Quiz getQuiz(Long qId) {
		// TODO Auto-generated method stub
		return quizRepository.findById(qId).get();
	}

	@Override
	public void deleteQuiz(Long qId) {
		// TODO Auto-generated method stub
		System.out.println(qId);
		quizRepository.deleteById(qId);
		
	}

	@Override
	public List<Quiz> getQuizzessofCategory(Category c) {
		// TODO Auto-generated method stub
		List<Quiz> findByCategory = quizRepository.findByCategory(c);
		return findByCategory;
	}

	@Override
	public List<Quiz> getActiveQuiz() {
		// TODO Auto-generated method stub
		return quizRepository.findByActive(true);
	}

	@Override
	public List<Quiz> getQuizByCategoryAndActive(Category c) {
		// TODO Auto-generated method stub
		return quizRepository.findByCategoryAndActive(c, true);
	}

}
