package com.revature.repository;

import com.revature.models.User;

public interface UserRepository {
	public void addPokeballs (User u);
	public void editMoney (User u);
	public User getById (int id);
	

}
