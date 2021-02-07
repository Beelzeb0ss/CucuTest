package services;

import java.util.ArrayList;

import models.User;

public class RegisterService {

	public static String register(String firstName, String lastName, String password1, String password2, String email, String phone) {

		if (null == email || email.isEmpty()) {
			return "Enter email";
		}

		if (null == firstName || firstName.isEmpty()) {
			return "Enter first name";
		}
		
		if (null == lastName || lastName.isEmpty()) {
			return "Enter last name";
		}
		
		if (null == phone || phone.isEmpty()) {
			return "Enter phone";
		}

		if ((password1 == null || password1.isEmpty()) && (password2 == null || password2.isEmpty())) {
			return "Enter pass";
		}
		System.out.println(password1 + "|" + password2 + "\n\n\n\n\n");
		if (!password1.equals(password2)) {
			return "Password does not match";
		}

		final ArrayList<User> users = DbService.getUsers();

		boolean doesEmailExists = users.stream().anyMatch(e -> e.getEmail().equals(email));
		if (doesEmailExists) {
			return "A user with the same email exists";
		}

		final User newUser = new User(firstName, lastName, email, password1, phone);
		users.add(newUser);
		return users.contains(newUser) ? "OK" : "";
	}
	
}
