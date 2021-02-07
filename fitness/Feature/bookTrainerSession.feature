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
Feature: Book trainer session feature

Scenario Outline: User registration
    Given The user opens the book trainer session screen
    Given Is authenticated "<email>"
    When Selects Trainer "<trainer>"
    And Selects Time "<time>"
    And Selects Date "<date>"
    And Clicks book button
    Then Sees booking message "<message>"
    
    Examples:
    |email|trainer|time|date|message|
    |nai_zdraviq@abv.bg|mitkoMitkoto@abv.bg|02:24|2021/01/01|OK|
    |nai_zdraviq@abv.bg|asdasdo@abv.bg|02:24|2021/01/01|Invalid trainer|
		||mitkoMitkoto@abv.bg|02:24|2021/01/01|Invalid user|
		|nai_zdraviq@abv.bg|mitkoMitkoto@abv.bg|00:00|1970/01/01|Time and Date are already booked by another user|
