package com.jwt.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jwt.example.entity.exam.Category;
import com.jwt.example.entity.exam.Quiz;
import com.jwt.example.service.CategoryService;
import com.jwt.example.service.QuizService;

@RestController
@CrossOrigin("*")
@RequestMapping("/quiz")
public class QuizController {
	
	@Autowired
	private QuizService quizService;
	
	@Autowired
	private CategoryService categoryService ;
	
	// Add Quiz

	@PostMapping("/add-quiz")
	public ResponseEntity<?> addQuiz(@RequestBody Quiz quiz)
	{
		return ResponseEntity.ok(quizService.addQuiz(quiz));
	}
	
	// Update Quiz
	@PutMapping("/update-quiz")
	public ResponseEntity<?> updateQuiz(@RequestBody Quiz quiz)
	{
		
		
		return ResponseEntity.ok(quizService.updateQuiz(quiz));
	}
	// Update Quiz
	@GetMapping("/{quizId}")
	public Quiz getQuiz(@PathVariable("quizId") Long quizId)
	{
		return quizService.getQuiz(quizId);
	}
	
	@GetMapping("/all-quizzes")
	public ResponseEntity<?> getAllQuiz()
	{
		return ResponseEntity.ok(quizService.getQuizzes());
	}
	
	// Delete Quiz
		@DeleteMapping("/{quizId}")
		public void deleteQuiz(@PathVariable("quizId") Long quizId)
		{
			
			quizService.deleteQuiz(quizId);
			//return "Deleted Successfully";
		}
		
		@GetMapping("/category/{cid}")
		public List<Quiz> getQuizByCategory(@PathVariable("cid") Long cid){
			Category c=new Category();
			c.setCid(cid);
			return this.quizService.getQuizzessofCategory(c);
		}
		
		@GetMapping("/active")
		public List<Quiz> getActiveQuiz(){
			return this.quizService.getActiveQuiz();
		}
		
		@GetMapping("/category/active/{cid}")
		public List<Quiz> getActiveQuizzesByCategory(@PathVariable ("cid")Long cid){
			Category c=new Category();
			c.setCid(cid);
			return this.quizService.getQuizByCategoryAndActive(c);
		}
		
}
