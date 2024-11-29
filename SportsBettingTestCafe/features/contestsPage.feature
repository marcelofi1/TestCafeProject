Feature: Contests Page feature

  I want to visualise all components of Contests

  Background: Open contests site
    Given I open contests

  @desktop @QATC-28652
  Scenario: Desktop components are displayed
    Then the desktop page shows contests components

  @mobile @QATC-28651
  Scenario: Mobile components are displayed
    Then the mobile page shows contests components





