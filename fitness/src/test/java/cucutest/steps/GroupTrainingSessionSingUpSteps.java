package cucutest.steps;

import static org.junit.Assert.assertEquals;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucutest.screenmodels.BookTrainerSessionScreenModel;
import models.GroupTrainingSessions;
import models.Trainer;
import models.User;
import cucutest.screenmodels.GroupTrainingSessionSignUpScreenModel;


public class GroupTrainingSessionSingUpSteps {

	GroupTrainingSessionSignUpScreenModel signUpScreen = new GroupTrainingSessionSignUpScreenModel();
	
	@Given("^The user opens the gts sign up screen$")
	public void the_user_opens_the_gts_sign_up_screen() throws Throwable {
		signUpScreen.navigateToMe();
	}
	
	@Given("^The user is authenticated \"([^\"]*)\"$")
	public void the_user_is_authenticated(final String userEmail) throws Throwable {
		signUpScreen.setUserEmail(userEmail);
	}
	
	@When("^Selects Session \"([^\"]*)\"$")
	public void selects_session(final String session) throws Throwable {
		signUpScreen.setSession(session);
	}
	
	@When("^Clicks sign up button$")
	public void clicks_sign_up_button() throws Throwable {
		signUpScreen.clickSignUpButton();
	}
	
	@Then("^Sees sign up message \"([^\"]*)\"$")
	public void sees_sign_up_message(String expectedMessage) throws Throwable {
		assertEquals(expectedMessage, signUpScreen.getSignUpMessage());
	}
	
}
