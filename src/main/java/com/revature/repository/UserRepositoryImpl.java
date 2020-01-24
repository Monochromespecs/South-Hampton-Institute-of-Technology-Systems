package com.revature.repository;

import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.revature.models.User;

@Repository("userRepository")
@Transactional
public class UserRepositoryImpl implements UserRepository{
	
	@Autowired
	UserRepository userRepository;
	
	private static Logger logger = Logger.getLogger(UserRepositoryImpl.class);
	
	@Override
	public void transaction(int amount) {

		
	}

	@Override
	public int sale(int value) {

		return 0;
	}

	@Override
	public void register(User user) {
		userRepository.save(user);
	}
	
	@Override
	public void save(User user) {
		user.setPassword(user.getPassword());
		userRepository.save(user);
	}

}
