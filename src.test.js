const { add2 } = require('./src.js');

it('should pass', () => {
  expect(add2(2)).toEqual(4);
});

it('should not pass', () => {
  expect(add2(2)).not.toEqual(5);
});