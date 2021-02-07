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
Feature: Register feature

Scenario Outline: User registration
    Given The user opens the registration screen
    When Enters first name "<firstName>"
    And Enters last name "<lastName>"
    And Enters desired password "<password>"
    And Confirms password "<password2>"
    And Enters desired email "<email>"
    And Enters phone "<phone>"
    And Clicks register button
    Then Sees registration message"<message>"
		
    Examples:
    |firstName|lastName|password|password2|email|phone|message|
    ||lastName|password|password|email|phone|Enter first name|
    |firstName||password|password|email|phone|Enter last name|
    |firstName|lastName|password|password2|email|phone|Password does not match|
    |stoqn|stoqnov|password|password|email|phone|OK|
    |stoqn|stoqnov|password|password|nai_zdraviq@abv.bg|phone|A user with the same email exists|
