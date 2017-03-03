module.exports = {
  'Sample05' : function (browser) {
    browser
    .page.HomePage().goToTanmay()
    .page.HomePage().navigateToSample05Page()
    .page.Sample05Page().switchTabAndEnterFormDetails('Michael','Jackson','Home Address','America','male')
    .page.Sample05Page().backHomeFromSample05Page()
    .end();
  }
};
