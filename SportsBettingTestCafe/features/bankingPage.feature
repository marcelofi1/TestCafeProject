Feature: Banking page feature

  I want to visualise all components of Banking Page

  Background: Open Banking site
    Given I open banking page

  @desktop @QATC-30805
  Scenario: Desktop components are displayed
    Then the desktop page shows banking components

  @mobile @QATC-30848
  Scenario: Mobile components are displayed
    Then the mobile page shows banking components

  @desktop @mobile @QATC-30806
  Scenario: Safe and Secure section components
    Then the image of "<OPTION>" is displayed
    Then the title of "<OPTION>" shows "<TITLE>"
    Then the description of "<OPTION>" contains "<DESC>"
    Examples:
      | OPTION      | TITLE                 | DESC                     |
      | fastDeposit | Fast Deposits         | Sign in and deposit      |
      | safeSecure  | Safe & Secure         | sensitive information    |
      | depoAssist  | Deposit Assistance    | Our operators            |
      | quickEasy   | Quick & Easy Cashouts | number of payout methods |

  @desktop @mobile @QATC-31144
  Scenario: The deposit and withdrawal sections are connected with Strapi is displayed
    Then I can visualize the bitcoin cell in "<SECTION>"
    Then the min amount of bitcoin in "<SECTION>" is "<MIN>"
    Then the max amount of bitcoin in "<SECTION>" is "<MAX>"
    Examples:
      | SECTION    | MIN  | MAX      |
      | deposit    | $20  | $500,000 |
      | withdrawal | $100 | $100,000 |

  @desktop @mobile @QATC-31161
  Scenario: The tool tip is displayed in deposit and withdrawal section
    When I click on the bitcoin info icon in the "<SECTION>" section
    Then the info bitcoin is displayed
    Examples:
      | SECTION    |
      | deposit    |
      | withdrawal |

  @desktop @mobile @QATC-31201
  Scenario: The link in the tool tip shows the correct page
    When I click on the bitcoin info icon in the "<SECTION>" section
    Then the info bitcoin is displayed
    When I click on the link of the bitcoin info from "<SECTION>" section
    Then the "<SECTION>" bitcoin help is displayed
    Examples:
      | SECTION    |
      | deposit    |
      | withdrawal |