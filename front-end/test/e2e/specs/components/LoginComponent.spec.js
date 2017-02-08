'use strict';

module.exports = {

  'Demo Contents test' : function (browser) {
    browser
      .url('http://localhost:8080/')
      .pause(1000)
      .assert.title('Demo')
      .assert.containsText('#iam-login-button', 'Sign in')
      .end();
  }
};
