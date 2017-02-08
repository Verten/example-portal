'use strict';

module.exports = {

  'Demo Contents test': function (browser) {
    browser
      .url('http://localhost:8080/')
      .pause(1000)
      .assert.title('Demo')
      .assert.count('input', 2)
      .assert.count('button', 1)
      .end();
  }
};
