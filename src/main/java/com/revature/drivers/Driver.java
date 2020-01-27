package com.revature.drivers;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.revature.models.User;
import com.revature.repository.UserRepositoryImpl;

public class Driver {

	public static void main(String[] args) {
		ApplicationContext ac = new ClassPathXmlApplicationContext("applicationContext.xml");
		
		UserRepositoryImpl userRepository = (UserRepositoryImpl)ac.getBean("UserRepositoryImpl");
		
		userRepository.save(new User(1, "Larry", "King", null, null, 0, null));
		userRepository.save(new User(0, "Harry", "Potter", null, null, 0, null));
		
//		System.out.println();
	}

}
