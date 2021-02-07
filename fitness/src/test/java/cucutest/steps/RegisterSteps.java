package cucutest.steps;

import static org.junit.Assert.assertEquals;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucutest.screenmodels.RegisterScreenModel;

public class RegisterSteps {
	
private RegisterScreenModel registerScreen = new RegisterScreenModel();
	
	@Given("^The user opens the registration screen$")
	public void the_user_opens_the_registration_screen() throws Throwable {
		registerScreen.navigateToMe();
	}

	@When("^Enters first name \"([^\"]*)\"$")
	public void enters_first_name(String firstName) throws Throwable {
		registerScreen.setFirstName(firstName);
	}
	
	@When("^Enters last name \"([^\"]*)\"$")
	public void enters_last_name(String lastName) throws Throwable {
		registerScreen.setLastName(lastName);
	}

	@When("^Enters desired password \"([^\"]*)\"$")
	public void enters_desired_password(String password) throws Throwable {
		registerScreen.setPassword1(password);
	}

	@When("^Confirms password \"([^\"]*)\"$")
	public void confirms_password(String password) throws Throwable {
		registerScreen.setPassword2(password);
	}

	@When("^Enters desired email \"([^\"]*)\"$")
	public void enters_desired_email(String email) throws Throwable {
		registerScreen.setEmail(email);
	}
	
	@When("^Enters phone \"([^\"]*)\"$")
	public void enters_phone(String phone) throws Throwable {
		registerScreen.setPhone(phone);
	}

	@When("^Clicks register button$")
	public void clicks_register_button() throws Throwable {
		registerScreen.clickRegisterButton();
	}

	@Then("^Sees registration message\"([^\"]*)\"$")
	public void sees_registration_message(String expectedMessage) throws Throwable {
	    assertEquals(expectedMessage, registerScreen.getRegisterMessage());
	}
	
}
