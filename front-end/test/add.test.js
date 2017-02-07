/**
 * Created by Ardy Chen on 1/25/2017.
 */

// var add = require('../src/add.js');
// var assert = require('chai').assert;

import {add} from '../src/add';

var assert = chai.assert;

describe('Function addition test', function() {
  it('1 plus 2 should equal 3', function () {
    assert.equal(add(1, 2), 3);
  });
});