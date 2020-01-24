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
	
	@PutMapping("/shop/ball_purchase")
	@ResponseBody
	public ResponseEntity<User> pokeBallPurchase(@RequestBody User u){
		return ResponseEntity.ok(UserRepositoryImpl.addPokeballs(u));;
		
	}

}
