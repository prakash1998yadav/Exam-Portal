package com.jwt.example.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.*;

@Builder
@Getter
@Setter
@AllArgsConstructor
@ToString
@NoArgsConstructor
public class JwtResponse {
	
	private String jwtToken;
	private String username;

//	public String getJwtToken() {
//		return jwtToken;
//	}
//	public void setJwtToken(String jwtToken) {
//		this.jwtToken = jwtToken;
//	}
//	public String getUsername() {
//		return username;
//	}
//	public void setUsername(String username) {
//		this.username = username;
//	}
//	public JwtResponse(String jwtToken, String username) {
//		super();
//		this.jwtToken = jwtToken;
//		this.username = jwtToken;
//	}
//	public static Object builder() {
//		// TODO Auto-generated method stub
//		return new JwtResponse(jwtToken,username);
//	}
//	 public static class JwtResponseBuilder {
//
//	        private String sjwtToken;
//	        private String sUsername;
//	        
//
//	        public JwtResponseBuilder setsjwtToken(final String sjwtToken) {
//	            this.sjwtToken = sjwtToken;
//	            return this;
//	        }
//
//	        public JwtResponseBuilder getsjwtToken(final String sjwtToken) {
//	            this.sjwtToken = sjwtToken;
//	            return this;
//	        }
//
//	        public JwtResponseBuilder setsUsername(final String sUsername) {
//	            this.sUsername = sUsername;
//	            return this;
//	        }
//	        public JwtResponseBuilder getsUsername(final String sUsername) {
//	            this.sUsername = sUsername;
//	            return this;
//	        }
//
//	        public JwtResponse build() {
//	            return new JwtResponse(sjwtToken, sUsername);
//	        }
//
//	    }


	
	

}

