package com.jwt.example;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.RequestBody;

import com.jwt.example.entity.Role;
import com.jwt.example.entity.User;
import com.jwt.example.entity.UserRole;
import com.jwt.example.service.UserService;

@SpringBootApplication
public class JwtExample3Application {

//	@Autowired
//	private static UserService userService;
//	@Autowired
//	private  PasswordEncoder passwordEncoder;
	
	public static void main(String[] args)  {
		SpringApplication.run(JwtExample3Application.class, args);
		
		//User u=createUser();
//		
//		User user=new User();
//		user.setFirstName("Shammi");
//		user.setLastName("Kumar");
//		user.setEmail("abc@gmail.com");
//		user.setPassword(passwordEncoder.encode("abc"));
//		user.setPhone("1234567890");
//		user.setProfile("Profile.png");
//		Role role=new Role();
//		role.setRoleId(44L);
//		role.setRoleName("ADMIN");
//		
//		Set<UserRole> userRoles=new HashSet<>();
//		UserRole ur=new UserRole();
//		ur.setUser(user);
//		ur.setRole(role);
//		userRoles.add(ur);
//		String pass=user.getPassword();
//		//user.setPassword(passwordEncoder.encode(pass));
//		
//		User user1=userService.createUser(user, userRoles);
	}
	
//	public static  User createUser() throws Exception
//	{
//		User user=new User();
//		user.setFirstName("Shammi");
//		user.setLastName("Kumar");
//		user.setEmail("abc@gmail.com");
//		user.setPassword(passwordEncoder.encode("abc"));
//		user.setPhone("1234567890");
//		user.setProfile("Profile.png");
//		Role role=new Role();
//		role.setRoleId(44L);
//		role.setRoleName("ADMIN");
//		
//		Set<UserRole> userRoles=new HashSet<>();
//		UserRole ur=new UserRole();
//		ur.setUser(user);
//		ur.setRole(role);
//		userRoles.add(ur);
//		return userService.createUser(user, userRoles);
//		 
//	}

}
