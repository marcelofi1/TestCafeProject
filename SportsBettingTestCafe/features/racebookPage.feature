Feature: Racebook Page feature

  I want to visualise all components of Racebook

  Background: Open Racebook site
    Given I open Racebook page

  @desktop @regression-desktop @QATC-28617
  Scenario: Desktop components are displayed
    Then the desktop page shows racebook components

  @mobile @regression-mobile @QATC-28618
  Scenario: Mobile components are displayed
    Then the mobile page shows racebook components