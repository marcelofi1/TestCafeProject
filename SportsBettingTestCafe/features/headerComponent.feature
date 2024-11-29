Feature: Header feature

  I want to visualise header elements

  Background: Open home page
    Given I open home page

  @desktop @regression-desktop @ignore @QATC-37136
  Scenario: Header components are displayed desktop
    Then the page shows header components desktop

  @mobile @regression-mobile @ignore @QATC-37148
  Scenario: Header components are displayed mobile
    Then the page shows header components mobile
