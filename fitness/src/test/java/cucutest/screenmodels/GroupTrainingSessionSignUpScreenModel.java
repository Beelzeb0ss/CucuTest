package cucutest.screenmodels;

import models.GroupTrainingSessions;
import models.User;
import services.GroupTrainingSessionSignUpService;

public class GroupTrainingSessionSignUpScreenModel {

	private String user;
	private String session;
	private String message;
	
	public void navigateToMe() {
		System.out.println("Group training session sign up screen is open");
	}
	
	public void setUserEmail(String userEmail) {
		this.user = userEmail;
	}
	
	public void setSession(String session) {
		this.session = session;
	}
	
	public void clickSignUpButton() {
		message = GroupTrainingSessionSignUpService.GroupTrainingSessionSignUP(user, session);
	}
	
	public String getSignUpMessage() {
		return message;
	}
	
}
