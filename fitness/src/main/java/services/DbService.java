package services;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;

import models.GroupTrainingSessions;
import models.Trainer;
import models.TrainerSession;
import models.User;

public class DbService {
	
	static ArrayList<User> users;
	static ArrayList<Trainer> trainers;
	static ArrayList<TrainerSession> trainerSessions;
	static ArrayList<GroupTrainingSessions> groupSessions;
	
	public static ArrayList<User> getUsers() {
		if(null == users) {
			generateAll();
		}
		
		return users;
	}
	
	public static ArrayList<Trainer> getTrainers(){
		if(null == trainers) {
			generateAll();
		}
		
		return trainers;
	}
	
	public static ArrayList<TrainerSession> getTrainerSesisons(){
		if(null == trainerSessions) {
			generateAll();
		}
		
		return trainerSessions;
	}
	
	public static ArrayList<GroupTrainingSessions> getGroupTrainingSessions(){
		if(null == groupSessions) {
			generateAll();
		}
		
		return groupSessions;
	}
	
	private static void generateAll() {
		generateUsers();
		generateTrainers();
		generateTrainerSessions();
		generateGroupTrainingSessions();
	}
	
	private static void generateGroupTrainingSessions() {
		if(null == users) {
			return;
		}
		
		groupSessions = new ArrayList<GroupTrainingSessions>();
		
		GroupTrainingSessions gtSession = new GroupTrainingSessions(LocalTime.MIDNIGHT, LocalDate.EPOCH, 3, "GT1");
		gtSession.addUser(users.get(0));
		users.get(0).addGroupTrainingSession(gtSession);
		groupSessions.add(gtSession);
		
		gtSession = new GroupTrainingSessions(LocalTime.MIDNIGHT, LocalDate.EPOCH, 1, "GT2");
		gtSession.addUser(users.get(0));
		users.get(0).addGroupTrainingSession(gtSession);
		groupSessions.add(gtSession);
	}
	
	private static void generateTrainerSessions() {
		if(null == users || null == trainers) {
			return;
		}
		
		TrainerSession session = new TrainerSession(LocalTime.MIDNIGHT, LocalDate.EPOCH, users.get(0), trainers.get(0));
		users.get(0).addTrainerSession(session);
		trainers.get(0).addTrainerSession(session);
	}
	
	private static void generateUsers() {
		User user = new User();
		user.setEmail("nai_zdraviq@abv.bg");
		user.setPassword("pass123");
		users = new ArrayList<User>();
		users.add(user);
		
		for(int i = 0; i < 9; i++) {
			user = new User();
			user.setEmail("user" + i + "@abv.bg");
			user.setPassword("pass" + i);
			users.add(user);
		}
	}
	
	private static void generateTrainers() {
		Trainer trainer = new Trainer();
		trainer.setFirstName("Mitko");
		trainer.setLastName("Mitkov");
		trainer.setEmail("mitkoMitkoto@abv.bg");
		
		trainers = new ArrayList<Trainer>();
		trainers.add(trainer);
	}
	
}
