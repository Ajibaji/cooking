Feature: Recipe search

Description: This feature will test search functionality

Scenario: Succesful search with single ingredient
    Given User is on Home Page
    When User Navigate to Search Page
    And User enters SearchButton
    Then RecipeList is displayed