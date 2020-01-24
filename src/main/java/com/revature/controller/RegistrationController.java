package com.revature.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.revature.models.User;
import com.revature.repository.UserRepository;

@Controller
public class RegistrationController {

  @Autowired
  public UserRepository userRepository;

  @RequestMapping(value = "/registration", method = RequestMethod.GET)
  public String registration(Model model) {
	  
    model.addAttribute("user", new User());
    return "registration";
    
  }

  @RequestMapping(value = "/login", method = RequestMethod.GET)
  public String login(Model model, String error, String logout) {
	  
	  if (error != null) {
		  model.addAttribute("error", "Your username and/or password is invalid.");
	  } 
	  if (logout != null) {
		  model.addAttribute("message", "You have been logged out.");
	  }
	  return "login";
  }
  
}