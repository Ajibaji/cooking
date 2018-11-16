Feature: Registration

    In oder to user Cooking app
    As a user
    I would like to create an account

    Scenario: Registration with valid details
        Given I am on the registration page
        And I have a valid username
        When I enter the regisgtration dteails with a valid username
        Then I should see a message confirming my registration

    Scenario: Registration with invalid details
        Given I am on the registration page
        When I enter the regisgtration details with an in use username
        Then I should see a message telling me my username has been taken

    # Scenario: Registration with no details
    #     Given I am on the registration page
    #     When I click 'Register' with nothing entered
    #     Then I should see a message telling me to enter all fields