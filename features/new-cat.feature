Feature: New cat

  Scenario: I want to add a new cat
    Given I am viewing the page at "/cats/new"
    When I enter "Snowball" into the "name" input
    And I enter "http://vignette2.wikia.nocookie.net/simpsons/images/d/db/Snowball_V.png/revision/latest?cb=20130424153630" into the "image" input
    And I click "Create Cat"
    Then I am redirected to the "/cats" page
    And I can see the list item "Snowball"

