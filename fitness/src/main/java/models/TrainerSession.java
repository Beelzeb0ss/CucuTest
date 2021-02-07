package models;


import java.time.LocalDate;
import java.time.LocalTime;
import java.util.*;

/**
 * 
 */
public class TrainerSession {

    /**
     * Default constructor
     */
    public TrainerSession() {
    }
       
	public TrainerSession(LocalTime time, LocalDate date, User user, Trainer trainer) {
		super();
		this.time = time;
		this.date = date;
		this.user = user;
		this.trainer = trainer;
	}

	/**
     * 
     */
    private LocalTime time;

    /**
     * 
     */
    private LocalDate date;

    /**
     * 
     */
    public User user;

    /**
     * 
     */
    public Trainer trainer;

    /**
     * @return
     */
    public LocalTime getTime() {
        return time;
    }

    /**
     * @return
     */
    public LocalDate getDate() {
        return date;
    }

}