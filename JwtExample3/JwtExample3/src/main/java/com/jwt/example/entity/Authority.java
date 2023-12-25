package com.jwt.example.entity;

import org.springframework.security.core.GrantedAuthority;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class Authority implements GrantedAuthority{

	private String authority;
	

}

