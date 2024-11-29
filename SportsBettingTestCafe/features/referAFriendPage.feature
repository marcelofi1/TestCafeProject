Feature: Refer a Friend Page feature

  I want to visualise all components of Refer A Friend

  Background: Open Refer a Friend site
    Given I open Refer a Friend page

  @desktop @mobile @QATC-28993
  Scenario: Refer A Friend components
    Then I should see the components

  @desktop @mobile @QATC-28995
  Scenario: I can click Refer Now Button in Refer a Friend landing Page guest user
    Then I click over Refer Now button
    Then the Login page is displayed

  @desktop @mobile @prod @QATC-28997
  # This scenario can not be run in QA because of this ticket [DEVOPS-11139]
  Scenario: I can click Refer Now button in Refer a Friend promotion logged user
    Then I login
    Then I click over Refer Now button
    Then the refer a friend pop up is displayed