package com.revature.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.repository.UserRepository;

@Service("userService")
public class UserServiceImpl implements UserService{

	
	@Autowired
	private UserRepository userRepository;
	
	public void transaction (int amount) {
	}
	
	public int getUserCurrency (int id) {
		return id;
	}
	public int sale (int sale) {
		return sale;
	}
}
