Feature: Poker page feature

  I want to visualise all components of Poker Page

  Background: Open SportsBetting site
    Given I open poker page

  @desktop @regression-desktop @QATC-28648
  Scenario: Desktop components are displayed
    Then the desktop page shows poker components

  @mobile @regression-mobile @QATC-28647
  Scenario: Mobile components are displayed
    Then the mobile page shows poker components

  @desktop @QATC-29433
  Scenario: Main banner components in Desktop
    Then I should see the main banner desktop
    Then I should see the titles container desktop
    Then I should see the download button desktop
    Then I should see the playonline button desktop

  @mobile @QATC-29433
  Scenario: Main banner components in Mobile
    Then I should see the main banner mobile
    Then I should see the titles container mobile
    Then I should see the download button mobile
    Then I should see the playonline button mobile

  @desktop @mobile @QATC-29438 @ppd @prod
  Scenario: Main banner titles
    Then the container "<OPTION>" contains "<WORDS>" in the title
    Examples:
      | OPTION | WORDS       |
      | one    | WIN BIG     |
      | two    | BAD BEAT    |
      | four   | Play online |

  @desktop @regression-desktop @ignore @QATC-29434
  Scenario: Main banner click on buttons in Desktop "<OPTION>"
    When I click on "<OPTION>" button desktop
    Then the "<OPTION>" page is displayed
    Examples:
      | OPTION     |
      | playonline |
      | download   |
      | poker 101  |

  @mobile @regression-mobile @ignore @QATC-29434
  Scenario: Main banner click on buttons in Mobile
    When I click on "<OPTION>" button mobile
    Then the "<OPTION>" page is displayed
    Examples:
      | OPTION        |
      | playonlinemob |
      | download      |
      | poker 101     |

  @desktop @QATC-29435
  Scenario: Tournament section cards desktop
    Then is displayed "5" cards desktop
    When I click on first card desktop
    Then the close button is displayed
    Then the week days table is displayed

  @mobile @QATC-29435
  Scenario: Tournament section cards mobile
    Then is displayed "5" cards mobile
    When I click on first card mobile
    Then the close button is displayed
    Then the week days table is displayed

  @desktop @mobile @QATC-29436
  Scenario: Feature components are displayed in Tournaments
    Then the "<OPTION>" feature shows the title "<TITLE>"
    Then the "<OPTION>" feature shows the button "LEARN MORE"
    Examples:
      | OPTION       | TITLE         |
      | pokerRelease | POKER RELEASE |
      | sixplus      | SIX PLUS      |

  @desktop @mobile @QATC-29437
  Scenario: The Features Container redirect to the pages
    When I click on "<OPTION>" feature
    Then the "<OPTION>" page is displayed
    Examples:
      | OPTION       |
      | pokerRelease |
      | sixplus      |
