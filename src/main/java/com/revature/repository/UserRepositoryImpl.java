package com.revature.repository;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.revature.models.User;

@Repository("userRepository")
@Transactional
public class UserRepositoryImpl {

	@Autowired
	private static SessionFactory sf;

	@Transactional
	public static void addPokeballs(User u) {
		Session s = sf.getCurrentSession();
		s.update(u);

	}

	@Transactional
	public static User getById(int id) {
		Session s = sf.getCurrentSession();
		return s.get(User.class, id);
	}

}
