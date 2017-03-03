module.exports = function (browser) {
  this.alertHandling = function() {
    browser
    .acceptAlert()
    return browser;
  };

  this.backHomeFromSample07Page = function() {
    browser
    var sample07 = browser.page.BaseContent();
    sample07.backhome();
    return browser;
  };

};
