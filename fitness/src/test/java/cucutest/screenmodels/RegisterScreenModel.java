package cucutest.screenmodels;

import services.RegisterService;

public class RegisterScreenModel {

	private String firstName;
	private String lastName;
	private String password1;
	private String password2;
	private String email;
	private String phone;
	private String message;

	public void navigateToMe() {
		System.out.println("Registration screen is open");
	}

	/**
	 * Set user name to the correct screen input field
	 * 
	 * @param username String representation of user name
	 */
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public void setPassword1(String password) {
		password1 = password;
	}

	public void setPassword2(String password) {
		password2 = password;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	public void setPhone(String phone) {
		this.phone = phone;
	}

	public void clickRegisterButton() {
		message = RegisterService.register(firstName, lastName, password1, password2, email, phone);

	}

	public String getRegisterMessage() {
		return message;
	}
	
}
