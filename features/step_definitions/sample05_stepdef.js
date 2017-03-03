const {client} = require('nightwatch-cucumber')
const {defineSupportCode} = require('cucumber')

defineSupportCode(({Given, Then, When}) => {
  When(/^I click the sample05 page$/, () => {
    return client
    .page.HomePage().navigateToSample05Page()
  })

  Then(/^I enter the form details in sample05 page$/,() => {
    return client
    .page.Sample05Page().switchTabAndEnterFormDetails('Michael','Jackson','Home Address','America','male')
    })

  Then(/^I click the home page link in sample05 page$/, () => {
    return client
    .page.Sample05Page().backHomeFromSample05Page()
  })

})
