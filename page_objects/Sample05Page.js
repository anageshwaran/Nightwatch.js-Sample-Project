module.exports = function (browser) {
  var sample05 = browser.page.BaseContent();
  this.switchTabAndEnterFormDetails = function(fname, lname, homeaddr,country,gender) {
    browser
    sample05.windowHandle();
    browser.url(function(result) {
      this.assert.equal(result.value, 'http://demo.tanmaysarkar.com/sample_01.html', 'Url is the same');
      console.log(result.value);
    });
    sample05.fillForm(fname, lname, homeaddr,country,gender);
    return browser
  };
  
  this.backHomeFromSample05Page = function() {
    browser
    sample05.backhome();
    return browser;
  };

};
