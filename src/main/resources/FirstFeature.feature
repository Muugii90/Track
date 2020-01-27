Feature: First feature file

  Background:
    Given I navigate to url "http://qa3.vytrack.com/user/login"

  @testtest
  Scenario: login as truck driver
    Given I login as "Truck driver"
    Then I validate page title of "Dashboard"
    And I mouseover to "Fleet" tab
    And I choose "Vehicles"
    And I get all the values from table
    And I get all the values from the "3" the row

  @testtest
  Scenario: verify login username
    Given I navigate to url "http://qa3.vytrack.com/user/login"
    Given I login as "Truck driver"
    And I should verify driver "Trudie Hansen"

  Scenario: verify driver logout
    Given I navigate to url "http://qa3.vytrack.com/user/login"
    Given I login as "Truck driver"
    Then I should logout
    And verify I in new login page


  Scenario:  login as sales manager
    Given I login as "sales manager"

  Scenario: login as store manager
    Given I login as "store manager"

