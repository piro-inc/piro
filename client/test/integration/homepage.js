var path = require('path')

module.exports = {
  'Log in button renders login form' : function (browser) {
    browser
      .url('http://localhost:3000')
      .waitForElementVisible('body', 5000)
      .click('button[id=login]')
      .pause(1000)
      .assert.elementPresent('#login-form')
      .end()
    browser.end()
  },

  'Register button renders the register form' : function (browser) {
    browser
      .url('http://localhost:3000')
      .waitForElementVisible('body', 5000)
      .click('button[id=register]')
      .pause(1000)
      .assert.elementPresent('#register-form')
      .end()
    browser.end()
  }
}
