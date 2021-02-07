package models;


import java.time.LocalDate;
import java.time.LocalTime;
import java.util.*;

/**
 * 
 */
public class GroupTrainingSessions {

    /**
     * Default constructor
     */
    public GroupTrainingSessions() {
    }
    
    public GroupTrainingSessions(LocalTime time, LocalDate date, int limit, String name) {
		super();
		this.time = time;
		this.date = date;
		this.limit = limit;
		this.name = name;
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
    private int limit;
    
    /**
     * 
     */
    private String name;

    /**
     * 
     */
    public ArrayList<User> user = new ArrayList<User>();

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

    /**
     * @param int limit
     */
    public void setLimit(int limit) {
        this.limit = limit;
    }

    /**
     * @return
     */
    public int getLimit() {
        return limit;
    }
    
    /**
     * @param int limit
     */
    public void addUser(User user) {
        this.user.add(user);
    }
    
    /**
     * @return
     */
    public int getUserCount() {
        return user.size();
    }
    
    /**
     * @return
     */
    public String getName() {
        return name;
    }
    
    /**
     * @param String name
     */
    public void setName(String name) {
        this.name = name;
    }

}