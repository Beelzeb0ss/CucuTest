package models;


import java.util.*;

/**
 * 
 */
public class User {

    /**
     * Default constructor
     */
    public User() {
    }
    
    public User(String firstName, String lastName, String email, String password, String phone) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.phone = phone;
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
    private String email;

    /**
     * 
     */
    private String password;

    /**
     * 
     */
    private String bankCard;

    /**
     * 
     */
    private String phone;

    /**
     * 
     */
    public Card card;

    /**
     * 
     */
    public ArrayList<TrainerSession> session = new ArrayList<TrainerSession>();

    /**
     * 
     */
    public ArrayList<GroupTrainingSessions> groupSession = new ArrayList<GroupTrainingSessions>();

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
     * @param string password
     */
    public void setPassword(String password) {
        this.password = password;
    }

    /**
     * @return
     */
    public String getPassword() {
        return password;
    }

    /**
     * @return
     */
    public String getBankCard() {
        return bankCard;
    }

    /**
     * @param String card
     */
    public void setBankCard(String card) {
        bankCard = card;
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
     * @param Card card
     */
    public void setCard(Card card) {
        this.card = card;
    }

    /**
     * @return
     */
    public Card getCard() {
        return card;
    }
    
    /**
     * @return
     */
    public ArrayList<TrainerSession> getTrainerSessions(){
    	return session;
    }
    
    /**
     * @return
     */
    public ArrayList<GroupTrainingSessions> getGroupTrainingSessions(){
    	return groupSession;
    }
    
    /**
     * @param TrainerSession session
     */
    public void addTrainerSession(TrainerSession session) {
        this.session.add(session);
    }
    
    /**
     * @param GroupTrainingSessions session
     */
    public void addGroupTrainingSession(GroupTrainingSessions session) {
        groupSession.add(session);
    }

}