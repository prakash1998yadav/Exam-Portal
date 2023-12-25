package com.jwt.example.controller;

import java.util.Set;

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
import com.jwt.example.service.CategoryService;

import jakarta.websocket.server.PathParam;
import lombok.Getter;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/category")
public class CategoryController {
	
	@Autowired
	private CategoryService categoryService;
	
	// Add categy
	
	@PostMapping("/add-category")
	public ResponseEntity<?> addCategory(@RequestBody Category cat)
	{
		Category category = categoryService.addCategory(cat);
		return ResponseEntity.ok(category);
	}
	
	// Get category by id
	@GetMapping("/{categoryId}")
	public Category getCategory(@PathVariable("categoryId") Long categoryId)
	{
		return this.categoryService.getCategory(categoryId);
	}
	
	// get ALl category
	@GetMapping("/all-category")
	public ResponseEntity<?> getAllCategoery()
	{
		return ResponseEntity.ok(this.categoryService.getCategories());
	}
	
	// Update the category
	@PutMapping("/update-category/")
	public ResponseEntity<?> updateCategory( @RequestBody Category cat )
	{
		return ResponseEntity.ok(categoryService.updateCategory(cat));
	}
	
	// Delete Category
	@DeleteMapping("/{categoryId}")
	public void deleteCategory(@PathVariable("categoryId") Long categoryId)
	{
		categoryService.deleteCategory(categoryId);
		//return ResponseEntity.ok("Deleted Successfully");
				
		//return "Deleted Successfully";
	}
	

}
