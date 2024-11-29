Feature: Redirect NSB

  it is validated that the page is available from an external link

  @desktop @mobile @QATC-29439
  Scenario: Is displayed login and join page
    Given I open "<OPTION>" page
    Then the page is displayed
    Examples:
      | OPTION |
      | login  |
      | join   |
