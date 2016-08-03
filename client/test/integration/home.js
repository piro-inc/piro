const exec = require('child_process').exec
const env = require('dotenv')
env.load()

module.exports = {
  'User is able to create a game': function (browser) {
    browser
    .url('http://localhost:3000')
    .waitForElementVisible('body', 500)
    .click('button[id=login]')
    .pause(1000)
    .assert.elementPresent('#login-form')
    .setValue('form.login-form .username', process.env.PIRO_TEST_USERNAME)
    .setValue('form.login-form .password', process.env.PIRO_TEST_PASSWORD)
    .click('form.login-form button')
    .pause(2000)
    .assert.visible('.nav-links')
    .assert.containsText('.nav-links', process.env.PIRO_TEST_USERNAME)
    .click('#demo-menu-lower-right')
    .pause(500)
    .click('li#createGame')
    .pause(500)
    .click('.rw-i-caret-down')
    .pause(250)
    .click('li#rw_1__listbox__option__2')
    .pause(250)
    .click('#team-one')
    .setValue('#team-one', 'Team One Testers')
    .click('#team-two')
    .setValue('#team-two', 'Team Two Developers')
    .click('#game-location')
    .setValue('#game-location', 'Enspiral Hotdog Academy')
    .click('.rw-i-calendar')
    .click('.rw-i-calendar')
    .pause(2000)
    .click('#rw_2_cal_calendar_label')
    .pause(500)
    .click('#rw_2_cal_calendar_label')
    .pause(500)
    .click('.rw-i-caret-right')
    .pause(500)
    .click('.rw-i-caret-right')
    .pause(500)
    .click('#rw_2_cal_calendar__decade_2035')
    .pause(100)
    .click('#rw_2_cal_calendar__year_2035-4')
    .pause(100)
    .click('#rw_2_cal_calendar__month_4-16')
    .click('#rw_2_cal_calendar__month_4-16')
    .pause(200)
    .click('.create-game-button')
    .pause(500)
    .assert.urlContains('console')
    .pause(2000)
    .end()
  }
}
