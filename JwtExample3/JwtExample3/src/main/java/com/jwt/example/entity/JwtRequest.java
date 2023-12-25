package com.jwt.example.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Builder
@Getter
@Setter
@AllArgsConstructor
@ToString
@NoArgsConstructor
public class JwtRequest {
	String username;
	String password;
//	public JwtRequest() {
//		super();
//		// TODO Auto-generated constructor stub
//	}
//	public JwtRequest(String email, String password) {
//		super();
//		this.email = email;
//		this.password = password;
//	}
//	public String getEmail() {
//		return email;
//	}
//	public void setEmail(String username) {
//		this.email = username;
//	}
//	public String getPassword() {
//		return password;
//	}
//	public void setPassword(String password) {
//		this.password = password;
//	}
//	
	

}

