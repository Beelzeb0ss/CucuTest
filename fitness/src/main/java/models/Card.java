package models;


import java.util.*;

/**
 * 
 */
public class Card {

    /**
     * Default constructor
     */
    public Card() {
    }

    /**
     * 
     */
    private String cardNumber;

    /**
     * 
     */
    private User owner;

    /**
     * 
     */
    private SubscriptionType subscriptionType;

    /**
     * @return
     */
    public SubscriptionType getSubscriptionType() {
        return subscriptionType;
    }

    /**
     * @return
     */
    public User getOwner() {
        return owner;
    }

    /**
     * @return
     */
    public String getCardNumber() {
        return cardNumber;
    }

}