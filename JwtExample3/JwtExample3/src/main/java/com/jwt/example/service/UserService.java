package com.jwt.example.service;

import java.util.List;
import java.util.Set;

import com.jwt.example.entity.User;
import com.jwt.example.entity.UserRole;



public interface UserService  {
	// Creating user
	public User createUser(User user, Set<UserRole> userRoles) throws Exception;
	
	// Getting user by username
	
	public User getUser(String username);
	public void deleteUser(Long userId);
	public User updateUser(String username,User user);
	public List<User> getAllUsers();

}
