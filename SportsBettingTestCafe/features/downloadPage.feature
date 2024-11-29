Feature: Poker page feature

  I want to visualise all components of Poker Page 

  Background: Open Download site
    Given I open download page 

  @mobile @QATC-38888
  Scenario: Download page elements are displayed in mobile   
    Then the page components are displayed in mobile  

  @mobile @QATC-38889
  Scenario: Download pop-up components are displayed in mobile    
    When I click on "<OPTION>"
    Then the pop-up components are displayed
    Examples:
      | OPTION        |     
      | android       |      
      | androidSecond |
  
 
  @mobile @QATC-38890
  Scenario: Poker page is displayed in mobile    
    When I click on "<OPTION>"
    Then the Poker page is displayed when "<OPTION>" is clicked
    Examples:
      | OPTION        |
      | ios           |      
      | iosSecond     |  	  
  
  
  @mobile @QATC-38891
  Scenario: The Need More Help button redirects to the related page in mobile   
    When I click on "<OPTION>"
    When I click on Need More Help button
    Then is redirected to help page
    Examples:
      | OPTION        |
      | android       |
      | androidSecond |       