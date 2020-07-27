const assert = require('assert');
const { add2 } = require('./src.js');

it.only('should pass', async () => {
  const res = await add2(2);
  assert.strictEqual(res, 4);
});

it('should not pass', async () => {
  const res = await add2(2);
  assert.strictEqual(res, 5);
});