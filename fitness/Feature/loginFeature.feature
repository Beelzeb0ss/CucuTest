#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@tag
Feature: Login Feature

 Scenario: Login with valid data
 Given The user opens the login screen
 When Enters email "nai_zdraviq@abv.bg"
 And Enters password "pass123"
 And Clicks the login button
 Then Sees login message "OK"
 
 Scenario: Login with wrong email
 Given The user opens the login screen
 When Enters email "stoqn@abv.bg"
 And Enters password "pass123"
 And Clicks the login button
 Then Sees login message "Wrong email or password"
 
 Scenario: Login with null email
 Given The user opens the login screen
 When Enters email ""
 And Enters password "pass123"
 And Clicks the login button
 Then Sees login message "Enter email"
 
 Scenario: Login with null password
 Given The user opens the login screen
 When Enters email "nai_zdraviq@abv.bg"
 And Enters password ""
 And Clicks the login button
 Then Sees login message "Enter pass"