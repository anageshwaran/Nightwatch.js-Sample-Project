module.exports = {
  'Sample07' : function (browser) {
    browser
    .page.HomePage().goToTanmay()
    .page.HomePage().navigateToSample07Page()
    .page.Sample07Page().alertHandling()
    .page.Sample07Page().backHomeFromSample07Page()
    .end();
  }
};
