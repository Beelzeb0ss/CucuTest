package cucutest.screenmodels;

import java.time.LocalDate;
import java.time.LocalTime;

import models.Trainer;
import models.User;
import services.BookTrainerSessionService;

public class BookTrainerSessionScreenModel {
	private String user;
	private String trainer;
	private String time;
	private String date;
	private String message;
	
	public void navigateToMe() {
		System.out.println("Book trainer session screen is open");
	}

	public void setUser(String user) {
		this.user = user;
	}

	public void setTrainer(String trainer) {
		this.trainer = trainer;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public void setDate(String date) {
		this.date = date;
	}
	
	public void clickBookButton() {
		message = BookTrainerSessionService.BookTrainerSession(user, trainer, time, date);
	}
	
	public String getBookingMessage() {
		return message;
	}
}
