package com.jwt.example.service;

import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jwt.example.entity.exam.Category;
import com.jwt.example.repo.CategoryRepository;

@Service
public class CategoryServiceImpl implements CategoryService{

	@Autowired
	private CategoryRepository categoryRepository;
	
	@Override
	public Category addCategory(Category c) {
		// TODO Auto-generated method stub
		return categoryRepository.save(c);
		
	}

	@Override
	public Category updateCategory(Category c) {
		// TODO Auto-generated method stub
//		Category cat=categoryRepository.findById(categoryId).get();
//		cat.setDescription(c.getDescription());
//		cat.setTitle(c.getTitle());
		return categoryRepository.save(c);
	}

	@Override
	public Set<Category> getCategories() {
		// TODO Auto-generated method stub
		return new LinkedHashSet<>(categoryRepository.findAll());
	}

	@Override
	public Category getCategory(Long cId) {
		// TODO Auto-generated method stub
		return categoryRepository.findById(cId).get();
	}

	@Override
	public void deleteCategory(Long cId) {
		// TODO Auto-generated method stub
		categoryRepository.deleteById(cId);
		
	}

}
