Feature: verify tabs

  @testtest
  Scenario: login as truck driver
    Given I navigate to url "http://qa3.vytrack.com/user/login"
    Given I login as "Truck driver"
    And verify tabs
      | Fleet      |
#      | Customers  |
#      | Activities |
#      | System     |


  Scenario: check dropdown list as visible
    Given I navigate to url "http://qa3.vytrack.com/user/login"
    Given I login as "Truck driver"
    And verify dropdown list
      | Fleet      | Vehicles        |
      | Customers  | Accounts        |
      | Activities | Calendar Events |
      | System     | User Management |

  @testtest
  Scenario Outline: login as different users
  Given I navigate to url "http://qa3.vytrack.com/user/login"
    Given  I login as "<userType>"

    Examples:
      | userType      |
      | Truck driver  |
#      | sales manager |
#      | store manager |





