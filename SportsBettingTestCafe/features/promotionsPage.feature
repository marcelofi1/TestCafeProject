Feature: Promotions Page feature

  I want to view and interact with all the components of the Promotions Page

  @desktop @regression-desktop @QATC-35002
  Scenario: Is displayed promotions components for desktop
    Given I open Promotions
    Then the components are displayed in desktop

  @mobile @regression-mobile @QATC-35084
  Scenario: Is displayed promotions components for mobile
    Given I open Promotions
    Then the components are displayed in mobile

  @desktop @mobile @regression-desktop @regression-mobile @ignore @QATC-35003
  Scenario: Is visible the secondary navigation components of the promotion
    Given I open Promotions
    When I click on "<OPTION>" subnav
    Then is displayed "<OPTION>" page
    Then title "<TITLE>" is displayed
    Then I can visualize the cards
    Examples:
      | OPTION      | TITLE                     |
      | deposit     | DEPOSIT PROMOTIONS        |
      | eSport      | ESPORTS PROMOTIONS        |
      | contests    | CONTESTS PROMOTIONS       |
      | racebook    | RACEBOOK PROMOTIONS       |
      | referFriend | REFER A FRIEND PROMOTIONS |
      | sports      | SPORTS PROMOTIONS         |
      | casino      | CASINO PROMOTIONS         |
      | poker       | POKER PROMOTIONS          |

  @desktop @mobile @ppd @prod @QATC-35004
  Scenario: The promotions card connected with Strapi is displayed
    Given I open Promotions "<OPTION>"
    Then I can visualize the cards image
    Then the card shows the title "PROMO AUTO NO BORRAR"
    Then the card shows the button "MORE INFO"
    Examples:
      | OPTION      |
      | deposit     |
      | eSport      |
      | contests    |
      | racebook    |
      | referFriend |
      | sports      |
      | casino      |
      | poker       |

  @desktop @mobile @ppd @prod @QATC-35005
  Scenario: Clicking on a card displays the content of the promotion
    Given I open Promotions "<OPTION>"
    When I click on a promotions
    Then the pomotions "<OPTION>" page is displayed
    Examples:
      | OPTION      |
      | deposit     |
      | eSport      |
      | contests    |
      | racebook    |
      | referFriend |
      | sports      |
      | casino      |
      | poker       |