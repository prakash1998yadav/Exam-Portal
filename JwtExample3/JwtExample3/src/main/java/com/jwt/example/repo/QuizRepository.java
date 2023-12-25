package com.jwt.example.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jwt.example.entity.Role;
import com.jwt.example.entity.exam.Category;
import com.jwt.example.entity.exam.Quiz;

public interface QuizRepository extends JpaRepository<Quiz, Long>{
	public List<Quiz> findByCategory(Category c);
	
	// find quiz if quiz is active
	public List<Quiz>  findByActive(Boolean b);
	
	
	// find by category and active
	public List<Quiz> findByCategoryAndActive(Category c , Boolean b);

}
