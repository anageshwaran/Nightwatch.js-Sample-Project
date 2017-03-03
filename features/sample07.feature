Feature: Sample07Page Test

@smoke7  @regression
Scenario: Testing the sample07 page

Given I navigate to home page
Then I verify the title of the home page
When I click the sample07 page
Then I close the alert in sample07 page
Then I click the home page link in sample07 page
