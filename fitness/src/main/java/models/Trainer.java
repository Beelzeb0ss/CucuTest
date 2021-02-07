package models;


import java.util.*;

/**
 * 
 */
public class Trainer {

    /**
     * Default constructor
     */
    public Trainer() {
    }

    /**
     * 
     */
    private String firstName;

    /**
     * 
     */
    private String lastName;

    /**
     * 
     */
    private String phone;

    /**
     * 
     */
    private String email;

    /**
     * 
     */
    public ArrayList<TrainerSession> session = new ArrayList<TrainerSession>();

    /**
     * @return
     */
    public String getFirstName() {
        return firstName;
    }

    /**
     * @param String name
     */
    public void setFirstName(String name) {   	
        firstName = name;
    }

    /**
     * @return
     */
    public String getLastName() {
        return lastName;
    }

    /**
     * @param String name
     */
    public void setLastName(String name) {
        lastName = name;
    }

    /**
     * @return
     */
    public String getEmail() {
        return email;
    }

    /**
     * @param string email
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * @return
     */
    public String getPhone() {
        return phone;
    }

    /**
     * @param String phone
     */
    public void setPhone(String phone) {
        this.phone = phone;
    }
    
    /**
     * @return
     */
    public ArrayList<TrainerSession> getTrainerSessions() {
        return session;
    }
    
    /**
     * @param String phone
     */
    public void addTrainerSession(TrainerSession session) {
    	this.session.add(session);
    }

}