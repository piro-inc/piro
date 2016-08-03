const exec = require('child_process').exec
const env = require('dotenv')

module.exports = {
  'User is able to create a game': function (browser) {
    browser
    .url('http://localhost:3000')
    .waitForElementVisible('body', 5000)
    .click('button[id=login]')
    .pause(1000)
    .assert.elementPresent('#login-form')
    .setValue('form.login-form .username', process.env.PIRO_TEST_USERNAME)
    .setValue('form.login-form .password', process.env.PIRO_TEST_PASSWORD)
    .click('form.login-form button')
    .waitForElementVisible('body', 3000)
    .assert.containsText('.nav-login-register', process.env.PIRO_TEST_USERNAME)
    .click('button[id=demo-menu-lower-right]')
    .end()
  }
}
