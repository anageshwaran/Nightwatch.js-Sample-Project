module.exports = {
  'Sample06' : function (browser) {
    browser
    .page.HomePage().goToTanmay()
    .page.HomePage().navigateToSample06Page()
    .page.Sample06Page().selectDatePicker()
    .page.Sample06Page().selectYear(2016)
    .page.Sample06Page().selectMonth(10)
    .page.Sample06Page().selectDate('1')
    .page.Sample06Page().backHomeFromSample06Page()
    .end();
  }
};
