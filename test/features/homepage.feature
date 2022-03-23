Feature: Search Feature

  Scenario: User Successfully Open Udemy Page
    Given User on Udemy home page
    When User tap button login
    And User directed to Udemy login page
    And User search Selenium Webdriver class
    And Verify the results class
    And User select one study class
    And User buying to product
    And Verify study class on Checkout page
    And User Payment this class
    Then Verify the error messages