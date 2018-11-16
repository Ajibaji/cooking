Feature: Login

    In order to use Cooking app
    As a user with an account
    I would like to create account

    Scenario: Login with valid details
        Given I am on the login page
        And I have previously registered an account
        When I enter my username and password on the login page
        And Click the login button
        Then I should see a message confirming my login

    # Scenario: Login with invalid password
    #     Given I am on the login page
    #     And I have previously registered an account
    #     When I enter my username with the wrong password
    #     And Click the login button
    #     Then I should see a message confirming my username or password was incorrect

    # Scenario: Login with invalid username
    #     Given I am on the login page
    #     When I enter a non registered username
    #     And Click the login button
    #     Then I should see a message confirming my username or password was incorrect

    # Scenario: Login with no forms filled
    #     Given I am on the login page
    #     When I Click the login button
    #     And Have not filled in any user details
    #     Then I should see a message saying I have not entered any fields

