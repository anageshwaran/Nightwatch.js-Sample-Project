const {client} = require('nightwatch-cucumber')
const {defineSupportCode} = require('cucumber')

defineSupportCode(({Given, Then, When}) => {
  When(/^I click the sample07 page$/, () => {
    return client
    .page.HomePage().navigateToSample07Page()
  })

  Then(/^I close the alert in sample07 page$/,() => {
    return client
    .page.Sample07Page().alertHandling()
  })

  Then(/^I click the home page link in sample07 page$/, () => {
    return client
    .page.Sample07Page().backHomeFromSample07Page()
  })

})
