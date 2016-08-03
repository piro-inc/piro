module.exports = {
  'Log in button renders login form': function (browser) {
    browser
      .url('http://localhost:3000')
      .waitForElementVisible('body', 5000)
      .click('button[id=login]')
      .pause(1000)
      .assert.elementPresent('#login-form')
      .end()
    browser.end()
  },

  'Register button renders the register form': function (browser) {
    browser
      .url('http://localhost:3000')
      .waitForElementVisible('body', 5000)
      .click('button[id=register]')
      .pause(1000)
      .assert.elementPresent('#register-form')
      .end()
    browser.end()
  },

  'Enter as a guest button redirects to the /games page': function (browser) {
    browser
      .url('http://localhost:3000')
      .waitForElementVisible('body', 5000)
      .click('h3 a')
      .pause(1000)
      .assert.urlEquals('http://localhost:3000/games')
      .end()
  },

  'Info button renders a modal': function (browser) {
    browser
      .url('http://localhost:3000')
      .waitForElementVisible('body', 5000)
      .click('button[class=about-icon]')
      .pause(500)
      .assert.elementPresent('.skylight-dialog', 'Welcome to PIRO')
  },

  'Log in form redirects successfully': function (browser) {
    browser
      .url('http://localhost:3000')
      .waitForElementVisible('body', 5000)
      .click('button[id=login]')
      .pause(1000)
      .assert.elementPresent('#login-form')
  }
}
