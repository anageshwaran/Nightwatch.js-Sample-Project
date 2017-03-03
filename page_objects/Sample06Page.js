module.exports = function (browser) {
  var sample06 = browser.page.BaseContent();
  this.selectDatePicker = function() {
    browser
    .click('a[href^="javascript"]')
    sample06.windowHandle();
    return browser
  };

  this.selectYear = function(yearToChoose) {
    browser
    sample06.windowHandle();
    browser.waitForElementVisible('td[align="right"] font b', 3000)
    browser.getText('td[align="right"] font b', function(result) {
      var year = result.value;
      console.log(year);
      var countDiff = year-yearToChoose;
      for(var i=1; i<=countDiff; i++) {
        browser
        .click('a[href^="javascript:winMain"]');
      }
    });
    return browser
  };

  this.selectMonth = function(monthToChoose) {
    sample06.windowHandle();
    browser
    .click("select[name='MonthSelector']")
    .click("option:nth-child(" + monthToChoose + ")")
    return browser
  };

  this.selectDate = function(date) {
    var desiredDate;
    sample06.windowHandle();
    browser.elements('css selector','a[href^="javascript:winMain.document.getElementById"]',function (links) {
      links.value.some(function(item) {
        browser.elementIdText(item.ELEMENT, function(result) {
          console.log(result.value);
          if(result.value===date) {
            console.log('Both are equal values');
            desiredDate=item.ELEMENT;
            console.log(desiredDate);
            return true;
          }
        });
      });
    }).perform(function() {
      if(desiredDate) {
        browser.elementIdClick(desiredDate);
      }
    });
    return browser;
  };

  this.backHomeFromSample06Page = function() {
    browser
    sample06.windowHandle();
    sample06.backhome();
    return browser;
  };

};
