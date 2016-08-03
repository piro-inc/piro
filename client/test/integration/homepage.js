const env = require('dotenv')
env.load()

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
      .end()
  },

  'User can log in successfully': function (browser) {
    browser
      .url('http://localhost:3000')
      .waitForElementVisible('body', 5000)
      .click('button[id=login]')
      .pause(1000)
      .assert.elementPresent('#login-form')
      .setValue('form.login-form .username', process.env.PIRO_TEST_USERNAME)
      .setValue('form.login-form .password', process.env.PIRO_TEST_PASSWORD)
      .click('form.login-form button')
      .pause(1000)
      .assert.containsText('.nav-login-register', process.env.PIRO_TEST_USERNAME)
      .end()
  },

  'User can register successfully': function (browser) {
    browser
      .url('http://localhost:3000')
      .waitForElementVisible('body', 5000)
      .click('button[id=register]')
      .pause(1000)
      .assert.elementPresent('#register-form')
      .setValue('form.register-form .')
  }
}
