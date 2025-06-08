Feature: Public API Testing

  Scenario: Get a user by ID
    Given I send a GET request to "https://jsonplaceholder.typicode.com/users/1"
    Then the response status should be 200
    And the response should contain the name "Leanne Graham"