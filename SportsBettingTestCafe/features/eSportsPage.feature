Feature: E-Sports Page feature

  I want to visualise all components of eSports

  Background: Open eSports site
    Given I open eSports

  @desktop @QATC-28649
  Scenario: Desktop components are displayed
    Then the desktop page shows eSports components

  @mobile @QATC-28650
  Scenario: Mobile components are displayed
    Then the mobile page shows eSports components




