package com.revature.repository;


import org.apache.log4j.Logger;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository("userReporistory")
@Transactional
public class UserRepositoryHibernate implements UserRepository{
	
	private static Logger logger = Logger.getLogger(UserRepositoryHibernate.class);

	@Override
	public void transaction(int amount) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public int sale(int value) {
		// TODO Auto-generated method stub
		return 0;
	}

}
