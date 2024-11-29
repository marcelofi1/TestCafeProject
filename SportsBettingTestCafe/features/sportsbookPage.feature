Feature: Sportsbook Page feature

  I want to visualise all components of Sportsbook

  @desktop @QATC-28200
  Scenario: Desktop components are displayed
    Given I open sportsbook
    Then the desktop page shows sportsbook components

  @mobile @QATC-28201
  Scenario: Mobile components are displayed
    Given I open sportsbook
    Then the mobile page shows sportsbook components

  #@mobile This test cannot be executed at the moment due to login problems with browserstrack. The bug was reported
  Scenario: Is displayed betslip
    When I login
    When I click on betslip icon
    Then the betslip page is displayed
    When I click on betslip close button
    When I logout
    Then the betslip page not shownd

  @critical-desktop @QATC-31424
  Scenario: Sports wager Live - Money Line Desktop
    Given I open the login page
    Then I log in successfully
    Given I open sportsbook
    When I click on Money Line
    Then type the value in the win field
    Then click on place bet button
    Then the sucess message is displayed

  @critical-mobile  @QATC-31425
  Scenario: Sports wager Live - Money Line Mobile
    Given I open the login page
    Then I log in successfully
    Given I open sportsbook
    When I click on Money Line
    Then type the value in the win field mobile
    Then click on place bet button
    Then the sucess message is displayed

  @critical-desktop @QATC-37074
  Scenario: Sports wager Live - Spread Desktop
    Given I open the login page
    Then I log in successfully
    Given I open sportsbook
    When I click on Spread
    Then type the value in the risk field
    Then click on place bet button
    Then the sucess message is displayed
    Then the Reuse this Selection button is visible

  @critical-mobile  @QATC-37075
  Scenario: Sports wager Live - Spread Mobile
    Given I open the login page
    Then I log in successfully
    Given I open sportsbook
    When I click on Spread
    Then type the value in the risk field mobile
    Then click on place bet button
    Then the Reuse this Selection button is visible