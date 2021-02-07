package cucutest.screenmodels;

import services.LoginService;

public class LoginScreenModel {
	
	private String email;
	private String password;
	private String message;

	public void navigateToMe() {
		System.out.println("Login screen is open");
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public void clickLoginButton() {
		message = LoginService.login(email, password);
	}

	public String getLoginMessage() {
		return message;
	}
	
}
