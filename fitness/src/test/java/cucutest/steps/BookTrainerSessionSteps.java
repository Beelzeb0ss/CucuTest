package cucutest.steps;

import static org.junit.Assert.assertEquals;

import java.time.LocalDate;
import java.time.LocalTime;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucutest.screenmodels.BookTrainerSessionScreenModel;
import models.Trainer;
import models.User;

public class BookTrainerSessionSteps {
	
	BookTrainerSessionScreenModel bookScreen = new BookTrainerSessionScreenModel();
	
	@Given("^The user opens the book trainer session screen$")
	public void the_user_opens_the_book_trainer_session_screen() throws Throwable {
		bookScreen.navigateToMe();
	}
	
	@Given("^Is authenticated \"([^\"]*)\"$")
	public void is_authenticated(final String user) throws Throwable {
		bookScreen.setUser(user);
	}
	
	@When("^Selects Trainer \"([^\"]*)\"$")
	public void selects_trainer(final String trainer) throws Throwable {
		bookScreen.setTrainer(trainer);
	}
	
	@When("^Selects Time \"([^\"]*)\"$")
	public void selects_time(final String time) throws Throwable {
		bookScreen.setTime(time);
	}
	
	@When("^Selects Date \"([^\"]*)\"$")
	public void selects_date(final String date) throws Throwable {
		bookScreen.setDate(date);
	}
	
	@When("^Clicks book button$")
	public void clicks_book_button() throws Throwable {
		bookScreen.clickBookButton();
	}
	
	@Then("^Sees booking message \"([^\"]*)\"$")
	public void sees_booking_message(String expectedMessage) throws Throwable {
		assertEquals(expectedMessage, bookScreen.getBookingMessage());
	}
}
