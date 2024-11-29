Feature: Carousel feature

  I want to visualise carousel in sportsbook, racebook, poker, contests

  @desktop @QATC-29850
  Scenario: Carousel components in desktop
    Given I open "<OPTION>" page
    Then the page shows promotions component in desktop
    Then the page shows title "<TITLE>"
    Examples:
      | OPTION   | TITLE               |
      | racebook | RACEBOOK PROMOTIONS |
      | eSport   | ESPORTS PROMOTIONS  |
      | contests | CONTEST PROMOTIONS  |
      | poker    | POKER PROMOTIONS    |

  @mobile @QATC-29850
  Scenario: Carousel components in mobile
    Given I open "<OPTION>" page
    Then the page shows promotions component in mobile
    Then the page shows title "<TITLE>"
    Examples:
      | OPTION   | TITLE               |
      | racebook | RACEBOOK PROMOTIONS |
      | eSport   | ESPORTS PROMOTIONS  |
      | contests | CONTEST PROMOTIONS  |
      | poker    | POKER PROMOTIONS    |

  @desktop @QATC-29851
  Scenario: Carousel arrow is displayed in desktop
    Given I open "<OPTION>" page
    Then the page shows a right arrow
    When I click on right arrow
    Then the page shows a left arrow
    When I click on left arrow
    Examples:
      | OPTION   |
      | contests |

  @mobile @QATC-29852
  Scenario: Carousel items are displayed in mobile
    Given I open "<OPTION>" page
    When the cards is moved to right position
    Then the right card is displayed
    When the cards is moved to left position
    Then the left card is displayed
    Examples:
      | OPTION   |
      | contests |

  @desktop @ppd @prod @QATC-29853
  Scenario: The promotions card connected with Strapi is displayed in desktop
    Given I open "<OPTION>" page
    Then I can visualize the cards image "<OPTION>"
    Then the "<OPTION>" card shows the title "PROMO AUTO NO BORRAR"
    Then the "<OPTION>" card shows the button "MORE INFO"
    Examples:
      | OPTION   |
      | racebook |
      | eSport   |
      | contests |
      | poker    |

  @mobile @ppd @prod @QATC-29853
  Scenario: The promotions card connected with Strapi is displayed in mobile
    Given I open "<OPTION>" page
    Then I can visualize the cards image "<OPTION>" in mobile
    Then the "<OPTION>" card shows the title "PROMO AUTO NO BORRAR" in mobile
    Then the "<OPTION>" card shows the button "MORE INFO" in mobile
    Examples:
      | OPTION   |
      | racebook |
      | eSport   |
      | contests |
      | poker    |

  @desktop @ppd @prod @QATC-29854
  Scenario: Clicking on a card displays the content of the promotion in desktop
    Given I open "<OPTION>" page
    When I click on a promotions "<OPTION>"
    Then the pomotions "<OPTION>" page is displayed
    Examples:
      | OPTION   |
      | racebook |
      | eSport   |
      | contests |
      | poker    |

  @mobile @ppd @prod @QATC-29854
  Scenario: Clicking on a card displays the content of the promotion in mobile
    Given I open "<OPTION>" page
    When I click on a promotions "<OPTION>" in mobile
    Then the pomotions "<OPTION>" page is displayed
    Examples:
      | OPTION   |
      | racebook |
      | eSport   |
      | contests |
      | poker    |