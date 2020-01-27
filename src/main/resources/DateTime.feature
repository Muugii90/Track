Feature: Date and Time Tests


  Scenario: Date Time, End date auto adjust
    Given I navigate to url "http://qa3.vytrack.com/user/login"
    Given I login as "store manager"
    And I "click" dropdown list
      | Activities | Calendar Events |
    And I click "Create Calendar event" button

    And I set the start date as "Sep 25, 2019"
    Then I validate the end date is "Sep 25, 2019"
#  And I set the start date as "today's date"
#  Then I validate the end date is "today's date"

  Scenario: Date time, end time auto adjust
    Given I navigate to url "http://qa3.vytrack.com/user/login"
    Given I login as "store manager"
    And I "click" dropdown list
      | Activities | Calendar Events |hjhj|nnj|
    And I click "Create Calendar event" button
    And I change the start time to 2 hours from now
    Then I verify that time changes 2 hours

  Scenario: Date time, End date/ time auto adjust
    Given I navigate to url "http://qa3.vytrack.com/user/login"
    Given I login as "store manager"
    And I "click" dropdown list
      | Activities | Calendar Events |
    And I click "Create Calendar event" button
    Then I should able to change start time to "11:30" PM
    And I verify ending date show me "tomorrow" date
    Then I verify ending time is "12:30"AM


  















