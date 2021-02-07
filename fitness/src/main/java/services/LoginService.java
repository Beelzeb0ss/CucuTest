package services;
import java.util.ArrayList;

import models.User;
public class LoginService {

	public static String login(String email, String password) {
		if (email == null && password == null) {
			return "Enter email and pass";
		}
		
		if (password == null || password.isEmpty()) {
			return "Enter pass";
		}
		
		if (email == null || email.isEmpty()) {
			return "Enter email";
		}
		
		ArrayList<User> users = DbService.getUsers();
		
		boolean doesExist = users.stream().anyMatch(user -> 
								(user.getEmail().equals(email) 
								&& user.getPassword().equals(password)));
		return doesExist?"OK":"Wrong email or password";
	}
	
}
