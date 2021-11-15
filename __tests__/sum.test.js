// sum.test.js

const { sum } = require('../assets/scripts/sum.js');

test('1 + 2 test', () => {
  expect(1 + 2).toBe(3);
});

test('sum(1,2) test', () => {
  expect(sum(1, 2)).toBe(3);
});