Feature: Critical feature

  I want to validate Join, Login, Deposit, Place Bet and Casino.

  @desktop @mobile @critical-cd @QATC-30621
  Scenario: Join registration success
    Given I open Join page
    When I complete registration form
    Then I joined success
