package com.jwt.example.controller;

import java.security.Principal;
import com.jwt.example.service.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jwt.example.entity.Role;
import com.jwt.example.entity.User;
import com.jwt.example.entity.UserRole;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class HomeController {
	
	@Autowired
	private UserService userServie;
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private UserDetailsService userDetailsService;
	
	@GetMapping("/users")
	public List<User> getUser()
	{
		System.out.println("Welcome User");
		return this.userServie.getAllUsers();
	}
	
	@GetMapping("/current-user")
	public User getCurrentUser(Principal principal)
	{
		return ((User)this.userDetailsService.loadUserByUsername(principal.getName()));
	}
	
	
	@PostMapping("/create-user")
	public User createUser(@RequestBody User user) throws Exception
	{
		Set<UserRole> userRoles=new HashSet<>();
		user.setProfile("Profile.png");
		Role role=new Role();
		role.setRoleId(50L);
		role.setRoleName("NORMAL");
		
		UserRole ur=new UserRole();
		ur.setUser(user);
		ur.setRole(role);
		userRoles.add(ur);
		String pass=user.getPassword();
		user.setPassword(passwordEncoder.encode(pass));
		
		return this.userServie.createUser(user,userRoles);
		 
	}
	// Get useer by username
	@GetMapping("/{username}")
	public User getUser(@PathVariable("username") String username) {
		return this.userServie.getUser(username);
	}
	
	// Delete user by user id
	@DeleteMapping("/{userId}")
	public void deleteUser(@PathVariable("userId") Long userId)
	{
		this.userServie.deleteUser(userId);
	}
	
	// Updating user by userName
	
	@PutMapping("/update/{username}")
	public User updateUser(@PathVariable("username") String username, @RequestBody User user) {
		return this.userServie.updateUser(username, user);
	}
	
	
	
}
