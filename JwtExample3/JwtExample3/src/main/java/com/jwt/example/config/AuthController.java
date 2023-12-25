package com.jwt.example.config;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jwt.example.entity.JwtRequest;
import com.jwt.example.entity.JwtResponse;
import com.jwt.example.helper.UserFoundException;
import com.jwt.example.helper.UserNotFoundException;
import com.jwt.example.security.JWTHelper;

@RestController
@CrossOrigin("*")
@ControllerAdvice
public class AuthController {
	
		@Autowired
	    private UserDetailsService userDetailsService;

	    @Autowired
	    private AuthenticationManager manager;


	    @Autowired
	    private JWTHelper helper;
	    
	    @PostMapping("/generate-token")
	    public ResponseEntity<JwtResponse> login(@RequestBody JwtRequest request) throws Exception {

	    	 try {
	    		 	this.doAuthenticate(request.getUsername(), request.getPassword());
	    	 }
	       
	    	 catch(Exception e )
	    	 {
	    		e.printStackTrace();
	    		throw new Exception("Ivalid User Details");
	    	 }

	        UserDetails userDetails = userDetailsService.loadUserByUsername(request.getUsername());
	        String token = this.helper.generateToken(userDetails);

	        JwtResponse response = JwtResponse.builder()
	                .jwtToken(token)
	                .username(userDetails.getUsername()).build();
	        
	       
	        return new ResponseEntity<>(response, HttpStatus.OK);
	    }
	    
	    private void doAuthenticate(String email, String password) {

	        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(email, password);
	        try {
	            manager.authenticate(authentication);


	        } catch (BadCredentialsException e) {
	            throw new BadCredentialsException(" Invalid Username or Password  !!");
	        }

	    }
	    @ExceptionHandler(UserFoundException.class)
	    public ResponseEntity<?> exceptionHandler(UserFoundException ex) {
	       // return new ResponseEntity<>(ex,HttpStatus.FOUND) ;
	        Map<String, String> errors = new HashMap<>();
	        errors.put("message", ex.getMessage());
	        return new ResponseEntity<>(errors, HttpStatus.CONFLICT);
	    }


}
