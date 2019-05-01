@dashboard
Feature: Test crew dashboard

  @filter
  Scenario Outline: Filter a crew members on the dashboard
    Given user navigates to a dashboard
    When user searches for "<name>" and city "<city>"
    Then user can see a crew member "<name>" on the dashboard

    Examples:
    | name           | city     |
    | gonzalez       | hereford |
    | gonzalez       |          |
    | lloyd gonzalez | hereford |

  @filter
  Scenario: Filter a crew member with invalid search parameter
    Given user navigates to a dashboard
    When user searches for "12345" and city "12345"
    Then user can see empty dashboard

  @workflow
  Scenario: Change a crew member state on the board
    Given user navigates to a dashboard
    And a crew member "gonzalez" is in state "Applied"
    When user searches for "gonzalez" and city "hereford"
    And user change crew member state "forward"
    Then a crew member "gonzalez" is in state "Interviewing"
    And user change crew member state "backwards"
    And a crew member "gonzalez" is in state "Applied"