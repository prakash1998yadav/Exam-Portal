package com.jwt.example.service;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jwt.example.entity.User;
import com.jwt.example.entity.UserRole;
import com.jwt.example.helper.UserFoundException;
import com.jwt.example.repo.RoleRepository;
import com.jwt.example.repo.UserRepository;



@Service
public class UserServiceImpl implements UserService{

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private RoleRepository roleRepository;
	
	@Override
	public User createUser(User user, Set<UserRole> userRoles) throws Exception {
		
		User local=this.userRepository.findByUsername(user.getUsername());
		if(local != null)
		{
			System.out.println("user already exists");
			throw new UserFoundException();
			//throw new Exception("User already exists");
		}
		else
		{
			for(UserRole ur : userRoles)
			{
				roleRepository.save(ur.getRole());
			}
			user.getUserRoles().addAll(userRoles);
			local=this.userRepository.save(user);
		}
		return local;
	}

	
	// Getting user by username
	@Override
	public User getUser(String username) {
		// TODO Auto-generated method stub
		return this.userRepository.findByUsername(username);
	}
	
	// Deleting user by user id
	
	@Override
	public void deleteUser(Long userId) {
		// TODO Auto-generated method stub
		this.userRepository.deleteById(userId);
		
	}


	// Updating user by user id
	@Override
	public User updateUser(String username,User user) {
		// TODO Auto-generated method stub
		User local=this.userRepository.findByUsername(username);
		if(local==null)
		{
			System.out.println("User doisn't exist");
			//throw new Exception("user not exist";)
		}
		else
		{
			User newUser=new User();
			
			newUser.setFirstName(local.getFirstName());
			newUser.setLastName(local.getLastName());
			newUser.setPhone(local.getPhone());
			newUser.setEmail(local.getEmail());
			newUser.setProfile(local.getProfile());
			newUser.setPassword(local.getPassword());
			newUser.setUsername(local.getUsername());
			newUser.setUserRoles(local.getUserRoles());
			local = this.userRepository.save(newUser);
			
			
		}
		
		
		return local;
	}


	@Override
	public List<User> getAllUsers() {
		// TODO Auto-generated method stub
		return this.userRepository.findAll();
	}

}
