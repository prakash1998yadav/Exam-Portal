package com.jwt.example.service;

import java.util.Set;

import com.jwt.example.entity.exam.Category;

public interface CategoryService {
	public Category addCategory(Category c);
	public Category updateCategory(Category c);
	public Set<Category> getCategories();
	public Category getCategory(Long cId);
	public void deleteCategory(Long cId);

}
