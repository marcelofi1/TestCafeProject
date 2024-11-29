Feature: Footer feature

  I want to visualise carousel in sportsbook, racebook, poker, contests

  Background: Open home page
    Given I open home page

  @desktop @mobile @QATC-30850
  Scenario: Clicking on Need help
    When I click on Need help
    Then the pop up is displayed

  @desktop @QATC-30851
  Scenario: Clicking on a option of quick links
    When I click on a "<OPTION>" link
    Then the "<OPTION>" page is displayed
    Examples:
      | OPTION             |
      | About Us           |
      | Refer a Friend     |
      | Rules              |
      | Affiliates         |
      | Privacy Policy     |
      | Terms & Conditions |
      | Responsible Gaming |

  @desktop @QATC-30852
  Scenario: Clicking on a option of Casino links desktop
    When I click on a Casino "<OPTION>" link
    Then the Casino "<OPTION>" page is displayed
    Examples:
      | OPTION      |
      | Play Casino |
      | Blackjack   |
      | Baccarat    |
      | Craps       |
      | Roulette    |
      | Keno        |
      | Slots       |
      | Video Poker |

  @mobile @QATC-30853
  Scenario: Clicking on a option of Casino links mobile
    When I click on Casino
    When I click on a Casino "<OPTION>" link
    Then the Casino "<OPTION>" page is displayed
    Examples:
      | OPTION      |
      | Play Casino |
      | Blackjack   |
      | Baccarat    |
      | Craps       |
      | Roulette    |
      | Keno        |
      | Slots       |
      | Video Poker |

  @desktop @QATC-30854
  Scenario: Clicking on a option of Sports links desktop
    When I click on a Sports "<OPTION>" link
    Then the Sports "<OPTION>" page is displayed
    Examples:
      | OPTION                  |
      | Sportsbook              |
      | NFL Betting Odds        |
      | NBA Betting Odds        |
      | MLB Betting Odds        |
      | NHL Betting Odds        |
      | NCAAF Betting Odds      |
      | NCAAB Betting Odds      |
      | Super Bowl Betting Odds |
      | UFC / MMA Betting Odds  |
      | Boxing Betting Odds     |

  @mobile @QATC-30855
  Scenario: Clicking on a option of Sports links mobile
    When I click on Sports
    When I click on a Sports "<OPTION>" link
    Then the Sports "<OPTION>" page is displayed
    Examples:
      | OPTION                  |
      | Sportsbook              |
      | NFL Betting Odds        |
      | NBA Betting Odds        |
      | MLB Betting Odds        |
      | NHL Betting Odds        |
      | NCAAF Betting Odds      |
      | NCAAB Betting Odds      |
      | Super Bowl Betting Odds |
      | UFC / MMA Betting Odds  |
      | Boxing Betting Odds     |

  @desktop @QATC-30856
  Scenario: Clicking on a option of Poker links desktop
    When I click on a Poker "<OPTION>" link
    Then the Poker "<OPTION>" page is displayed
    Examples:
      | OPTION       |
      | Play Poker   |
      | Download     |
      | Texas Holdem |
      | Omaha Poker  |

  @mobile @QATC-30858
  Scenario: Clicking on a option of Poker links mobile
    When I click on Poker
    When I click on a Poker "<OPTION>" link
    Then the Poker "<OPTION>" page is displayed
    Examples:
      | OPTION       |
      | Play Poker   |
      | Download     |
      | Texas Holdem |
      | Omaha Poker  |

  @desktop @QATC-30859
  Scenario: Clicking on a option of Racebook links desktop
    When I click on a Racebook "<OPTION>" link
    Then the Racebook "<OPTION>" page is displayed
    Examples:
      | OPTION           |
      | Horse Betting    |
      | Kentucky Derby   |
      | Preakness Stakes |
      | Belmont Stakes   |
      | Breeders Cup     |

  @mobile @QATC-30860
  Scenario: Clicking on a option of Racebook links mobile
    When I click on Racebook
    When I click on a Racebook "<OPTION>" link
    Then the Racebook "<OPTION>" page is displayed
    Examples:
      | OPTION           |
      | Horse Betting    |
      | Kentucky Derby   |
      | Preakness Stakes |
      | Belmont Stakes   |
      | Breeders Cup     |

  @desktop @mobile @QATC-30861
  Scenario: Clicking on a option of Promos link
    When I click on a Promos "<OPTION>" link
    Then the Promos "<OPTION>" page is displayed
    Examples:
      | OPTION |
      | Promos |

  @desktop @mobile @QATC-30861
  Scenario: Clicking on social media icon
    When I click on "<OPTION>" social media icon
    Then the "<OPTION>" social media page is displayed
    Examples:
      | OPTION    |
      | Instagram |
      | X         |
