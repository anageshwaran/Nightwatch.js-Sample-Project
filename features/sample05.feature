Feature: Sample05Page Test

@smoke5 @regression1 @regression
Scenario: Testing the sample05 page

Given I navigate to home page
Then I verify the title of the home page
When I click the sample05 page
Then I enter the form details in sample05 page
Then I click the home page link in sample05 page
