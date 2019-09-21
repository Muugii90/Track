Feature: Date and Time Tests

@testtest
  Scenario: Date auto adjust
    Given I navigate to url "http://qa3.vytrack.com/user/login"
    Given I login as "store manager"
    And I "click" dropdown list
      | Activities | Calendar Events |
  And I click "Create Calendar event" button
  And I set the start date as "Sep 25, 2019"
  Then I validate the end date is "Sep 25, 2019"
  And I set the start date as "today's date"
  Then I validate the end date is "today's date"






