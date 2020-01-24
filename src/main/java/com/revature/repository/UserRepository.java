package com.revature.repository;

import com.revature.models.User;

public interface UserRepository {
	
	void transaction (int amount);
	int sale (int value);
	void register(User user);
	void save(User user);

}
