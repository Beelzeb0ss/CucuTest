package services;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Date;

import models.Trainer;
import models.TrainerSession;
import models.User;
import utility.UtilityStuff;

public class BookTrainerSessionService {
	
	public static String BookTrainerSession(String userEmail, String trainerEmail, String time, String date) {
		if(null == userEmail) {
			return "Null user";
		}
		
		if(!DbService.getUsers().stream().anyMatch(u -> u.getEmail().equals(userEmail))) {
			return "Invalid user";
		}
		
		if(null == trainerEmail) {
			return "Null trainer";
		}
		
		if(!DbService.getTrainers().stream().anyMatch(t -> t.getEmail().equals(trainerEmail))) {
			return "Invalid trainer";
		}
		
		if(null == time | time.isEmpty()) {
			return "Null time";
		}
		
		String[] timeArr = time.split(":"); 
		if(timeArr.length != 2) {
			return "Invalid time format";
		}
		for(String v : timeArr) {
			if(!UtilityStuff.tryParseInt(v)) {
				return "Invalid time value";
			}
		}
		
		if(null == date | time.isEmpty()) {
			return "Null date";
		}
		
		String[] dateArr = date.split("/");
		if(dateArr.length != 3) {
			return "Invalid date format";
		}
		for(String v : dateArr) {
			if(!UtilityStuff.tryParseInt(v)) {
				return "Invalid date value";
			}
		}
		
		Trainer trainer = null;
		for(Trainer t : DbService.getTrainers()) {
			if(t.getEmail().equals(trainerEmail)) {
				trainer = t;
				break;
			}
		}
		final Trainer t1 = trainer;
		if(trainer.getTrainerSessions().stream().anyMatch(t -> t.getTime().equals(LocalTime.of(Integer.parseInt(timeArr[0]), Integer.parseInt(timeArr[1]))) && t1.getTrainerSessions().stream().anyMatch(d -> d.getDate().equals(LocalDate.of(Integer.parseInt(dateArr[0]), Integer.parseInt(dateArr[1]), Integer.parseInt(dateArr[2])))))) {
			return "Time and Date are already booked by another user";
		}
		
		User user = null;
		for(User u : DbService.getUsers()) {
			if(u.getEmail().equals(userEmail)) {
				user = u;
				break;
			}
		}
		
		TrainerSession session = new TrainerSession(LocalTime.of(Integer.parseInt(timeArr[0]), Integer.parseInt(timeArr[1])), LocalDate.of(Integer.parseInt(dateArr[0]), Integer.parseInt(dateArr[1]), Integer.parseInt(dateArr[2])), user, trainer);
		user.addTrainerSession(session);
		trainer.addTrainerSession(session);
		
		return "OK";
	}
}
