var assert = require('assert');
var count = 0;

before(function() {
  console.log('before');
});

beforeEach(function() {
  console.log('before every test in every file:' + count++);
});

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal(-1, [1,2,3].indexOf(5));
//     });
//   });
// });