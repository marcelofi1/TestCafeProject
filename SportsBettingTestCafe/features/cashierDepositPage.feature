Feature: Cashier/Deposit feature

  I want to deposit to the different environments

  Background: Open deposit page
    Given I open the login page
    Then I log in successfully

  @desktop @QATC-30741
  Scenario: deposit with credit card successfully from desposit button
    Then I click on Deposit button
    Then I select a CC method
    Then Complete the credit card form
    Then Click on Deposit Now
    Then A success message is displayed

  @desktop @mobile @critical-cd @QATC-30740
  Scenario: deposit with credit card successfully from my account
    Then I click on My Account
    Then I click on Deposit Now Button
    Then I select a CC method
    Then Complete the credit card form
    Then Click on Deposit Now
    Then A success message is displayed