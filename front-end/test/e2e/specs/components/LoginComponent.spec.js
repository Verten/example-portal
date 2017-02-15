'use strict';

module.exports = {

  'Demo Contents test': function (browser) {
    browser
      .url('http://localhost:8080/')
      .pause(1000)
      .assert.title('Demo')
      .assert.count('input', 2)
      .assert.count('button', 1)
      .setValue('input#identifier','admin')
      .setValue('input#password','123456')
      .click('button#iam-login-button')
      .assert.containsText('div.login-message-wrapper > div', '404') // back end is not ready, so it return 404
      .pause(2000)
      .end();
  }
};
