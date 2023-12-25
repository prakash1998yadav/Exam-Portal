package com.jwt.example.helper;

public class UserNotFoundException  extends Exception{

	public UserNotFoundException()
	{
		super("User is not present");
	}
	public UserNotFoundException(String msg) {super(msg);}
}
