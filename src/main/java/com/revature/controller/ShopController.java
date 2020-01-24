package com.revature.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.revature.models.User;
import com.revature.repository.UserRepositoryImpl;

@Controller
public class ShopController {
	
	
	//This method will receive a new user with added pokeballs after a successful purchase. 
	@PutMapping("/shop/ball_purchase")
	@ResponseBody
	public ResponseEntity<Object> pokeBallPurchase(@RequestBody User u){
		UserRepositoryImpl.addPokeballs(u);
		return ResponseEntity.ok().build();
	}

}
