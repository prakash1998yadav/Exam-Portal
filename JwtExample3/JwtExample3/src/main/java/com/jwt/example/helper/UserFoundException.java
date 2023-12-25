package com.jwt.example.helper;

public class UserFoundException extends Exception{

	public UserFoundException()
	{
		super("User with username is already there !! try with another one");
		
	}
	public UserFoundException(String msg) {super(msg);}
}
