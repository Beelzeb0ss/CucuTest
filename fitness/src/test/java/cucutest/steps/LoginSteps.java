package cucutest.steps;

import static org.junit.Assert.assertEquals;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucutest.screenmodels.LoginScreenModel;

public class LoginSteps {
	
	LoginScreenModel loginScreen = new LoginScreenModel();

	@Given("^The user opens the login screen$")
	public void the_user_opens_the_login_screen() throws Throwable {
		loginScreen.navigateToMe();
	}

	@When("^Enters email \"([^\"]*)\"$")
	public void enters_email(String username) throws Throwable {
		loginScreen.setEmail(username);
	}

	@When("^Enters password \"([^\"]*)\"$")
	public void enters_password(String password) throws Throwable {
		loginScreen.setPassword(password);
	}

	@When("^Clicks the login button$")
	public void clicks_the_login_button() throws Throwable {
		loginScreen.clickLoginButton();
	}

	@Then("^Sees login message \"([^\"]*)\"$")
	public void sees_login_message(String expectedMessage) throws Throwable {
		assertEquals(expectedMessage, loginScreen.getLoginMessage());
	}
	
}
