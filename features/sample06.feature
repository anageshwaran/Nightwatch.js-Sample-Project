Feature: Sample06Page Test

@smoke6  @regression2 @regression
Scenario: Testing the sample06 page

Given I navigate to home page
Then I verify the title of the home page
When I click the sample06 page
Then I choose the date
Then I click the home page link in sample06 page
