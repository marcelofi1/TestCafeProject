Feature: Home Page feature

  I want to visualise all components of Home Page

  Background: Open SportsBetting site
    Given I open SportsBetting

  @desktop @regression-desktop @QATC-28615
  Scenario: Home page components
    Then I should see the components desktop

  @mobile @regression-mobile @QATC-28615
  Scenario: Home page components
    Then I should see the components mobile

  @desktop @ignore @QATC-29457
  Scenario: Is redirected to the related page when component is clicked in the main menu bar desktop
    When I click on '<OPTION>' component from the main menu
    Then the '<OPTION>' page is displayed
    Examples:
      | OPTION      |
      | sports      |
      | liveBetting |
      | casino      |
      | racebook    |
      | poker       |
      | eSports     |
      | promos      |

  @mobile @ignore @QATC-29458
  Scenario: Is redirected to the related page when component is clicked in the main menu bar mobile
    When I click on burger button
    When I click on '<OPTION>' icon from the hamburger menu
    Then the '<OPTION>' page is displayed
    Examples:
      | OPTION      |
      | sports      |
      | liveBetting |
      | casino      |
      | racebook    |
      | poker       |
      | eSports     |
      | promos      |

  @desktop @mobile @QATC-29375
  Scenario: Popular in Sports
    Then the page shows "popular in sports" title "Popular in Sports"
    Then the "BET NOW" text is displayed in the buttons
    Then is displayed "3" cards

  @desktop @mobile @ignore @QATC-29376 @ppd @prod
  Scenario: Popular in Sports - click on each card
    When I click on '<OPTION>' card of Popular in Sports
    Then the '<OPTION>' page is displayed
    Examples:
      | OPTION |
      | nfl    |
      | mlb    |
      | ncaa   |

  @desktop @mobile @QATC-29386
  Scenario: Popular in casino
    Then the page shows "Popular in Casino carousel" title "Popular in Casino"
    Then the "Visit casino" text is displayed

  @desktop @mobile @QATC-29391
  Scenario: Is redirected to casino page when visit casino is clicked
    When I click on visit casino link
    Then the casino page is displayed

  @desktop @QATC-29389
  Scenario: The Popular in casino carousel arrows
    When I click on right arrow
    Then the page shows a left arrow
    When I click on left arrow

  @mobile @QATC-29390
  Scenario: Swipe Left and Right the cards of popular casino carousel
    When I swipe left and rigth the popular casino carousel

  @desktop @mobile @QATC-29387
  Scenario: Is redirected to the related page when image from Popular in casino is clicked
    When I click on first card image from the carousel
    Then the casino page is displayed

  @critical-cd @QATC-31060
  Scenario: Click on the first image of Popular in Casino, the universal prelaunch modal opens and then I click on play the game
    Given I open the login page
    Then I log in successfully
    Then I click on Sports Betting logo
    When I click on first card image from the carousel
    Then I click on play now button
    Then the play page is displayed
