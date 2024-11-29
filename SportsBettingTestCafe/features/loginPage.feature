Feature: Login feature

  I want to log in to the different environments

  Background: Open login page
    Given I open the login page

  @desktop @mobile @critical-cd @QATC-30624
  Scenario: Login successfully
    Then I can log in successfully
    Then I can see the universal balance