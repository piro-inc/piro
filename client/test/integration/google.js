var path = require('path')

module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 2000)
      .setValue('input[type=text]', 'nightwatch')
      .waitForElementVisible('button[name=btnG]', 2000)
      .click('button[name=btnG]')
      .pause(2000)
      .assert.containsText('#main', 'Night Watch')
      .end()
  }
}
