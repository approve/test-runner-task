const assert = require('assert');
const { add2 } = require('./src.js');

it('should pass', () => {
  assert.strictEqual(add2(2), 4);
});

it('should not pass', () => {
  assert.strictEqual(add2(2), 5);
});