Feature: Promotions Contents Page feature

  I want to view and interact with all the components of the Promotions Page

  @desktop @ppd @prod @QATC-34996
  Scenario: All components are visible in desktop
    Given I open promotions "<OPTION>" page
    Then I click over first card
    Then I can visualize the components in desktop
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

  @mobile @ppd @prod @QATC-35083
  Scenario: All components are visible in mobile
    Given I open promotions "<OPTION>" page
    Then I click over first card
    Then I can visualize the components in mobile
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

  @desktop @mobile @ppd @prod @QATC-34997
  Scenario: The promotions card contents connected with Strapi is displayed
    Given I open promotions card "<OPTION>" contents page
    Then the promotions contents page shows the title "PROMO AUTO NO BORRAR"    
    Then the promotions contents page shows the cta button "CTA"
    Then the promotions contents page shows the promo button "PROMO CODE BOL 100 PRUEBA DE L"
    Then the promotions contents page shows the terms and condition details "Forfeiting this bonus will result in the bonus"
    Then the promotions contents page shows the table prizes "Prize Multiplie"
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

  @desktop @mobile @ppd @prod @QATC-34998
  Scenario: I can click on terms and conditions
    Given I open promotions card "<OPTION>" contents page
    When I click on terms and condition
    Then the promotions contents page shows the terms and condition details "Forfeiting this bonus will result in the bonus"
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

  @desktop @mobile @QATC-34999
  Scenario: I can click on back button
    Given I open promotions "<OPTION>" page
    Then I click over first card
    When I click on back button
    Then the promotions "<OPTION>" page is displayed
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

  @desktop @mobile @ppd @prod @QATC-35000
  Scenario: I can click on CTA button
    Given I open promotions "<OPTION>" page
    Then I click over first card
    When I click on cta button
    Then the "<OPTION>" page is displayed
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

  @desktop @mobile @ppd @prod @QATC-35001
  Scenario: I can click on promo button
    Given I open promotions card "<OPTION>" contents page
    When I click on promo button
    Then the promotions "<OPTION>" page is displayed
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
