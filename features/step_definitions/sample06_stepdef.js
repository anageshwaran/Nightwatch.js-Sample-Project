const {client} = require('nightwatch-cucumber')
const {defineSupportCode} = require('cucumber')

defineSupportCode(({Given, Then, When}) => {
  When(/^I click the sample06 page$/, () => {
    return client
    .page.HomePage().navigateToSample06Page()
  })

  Then(/^I choose the date$/,() => {
    return client
    .page.Sample06Page().selectDatePicker()
    .page.Sample06Page().selectYear(2016)
    .page.Sample06Page().selectMonth(10)
    .page.Sample06Page().selectDate('1')
  })

  Then(/^I click the home page link in sample06 page$/, () => {
    return client
    .page.Sample06Page().backHomeFromSample06Page()
  })

})
