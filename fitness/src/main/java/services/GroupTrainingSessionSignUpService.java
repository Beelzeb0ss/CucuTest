package services;

import models.User;
import models.GroupTrainingSessions;

public class GroupTrainingSessionSignUpService {

	public static String GroupTrainingSessionSignUP(String user, String session) {
		if(null == user | user.isEmpty()) {
			return "Null user";
		}
		
		if(!DbService.getUsers().stream().anyMatch(u -> u.getEmail().equals(user))) {
			return "Invalid user";
		}
		
		if(null == session | session.isEmpty()) {
			return "Null session";
		}
		
		if(!DbService.getGroupTrainingSessions().stream().anyMatch(s -> s.getName().equals(session))) {
			return "Invalid session";
		}
		
		User user1 = null;
		for(User u : DbService.getUsers()) {
			if(u.getEmail().equals(user)) {
				user1 = u;
			}
		}
		
		GroupTrainingSessions session1 = null;
		for(GroupTrainingSessions s : DbService.getGroupTrainingSessions()) {
			if(s.getName().equals(session)) {
				session1 = s;
			}
		}
		
		
		if(session1.getLimit() <= session1.getUserCount()) {
			return "Session is full";
		}
		
		session1.addUser(user1);
		user1.addGroupTrainingSession(session1);
		return "OK";
	}
	
}
