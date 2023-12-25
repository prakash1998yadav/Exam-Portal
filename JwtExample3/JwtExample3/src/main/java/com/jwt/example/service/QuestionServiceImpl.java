package com.jwt.example.service;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jwt.example.entity.exam.Question;
import com.jwt.example.entity.exam.Quiz;
import com.jwt.example.repo.QuestionRepository;

@Service
public class QuestionServiceImpl implements QuestionService{

	@Autowired
	private QuestionRepository questionRepository;
	
	@Override
	public Question addQuestion(Question ques) {
		// TODO Auto-generated method stub
		System.out.println(ques);
		return questionRepository.save(ques);
	}

	@Override
	public Question updateQuestion(Question ques) {
		// TODO Auto-generated method stub
		return questionRepository.save(ques);
	}

	@Override
	public Set<Question> getAllQuestions() {
		// TODO Auto-generated method stub
		return new HashSet<>(questionRepository.findAll());
	}

	@Override
	public Question getQuestion(Long quesId) {
		// TODO Auto-generated method stub
		return questionRepository.findById(quesId).get();
	}

	@Override
	public void deleteQuestion(Long quesId) {
		// TODO Auto-generated method stub
		Question q=new Question();
		q.setQuesId(quesId);
		questionRepository.delete(q);
		
	}

	@Override
	public Set<Question> getQuestionsOfQuiz(Quiz quiz) {
		// TODO Auto-generated method stub
		return questionRepository.findByQuiz(quiz);
		
	}

}
