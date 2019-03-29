const recursionF = require('../recursion');
const sequentialF = require('../sequential');
const matrixF = require('../matrix');
const formulaF = require('../formula');

const implementations = [
  {
    name: 'Recursion',
    fn: recursionF
  },
  {
    name: 'Sequential',
    fn: sequentialF
  },
  {
    name: 'Matrix',
    fn: matrixF
  },
  {
    name: 'Formula',
    fn: formulaF
  }
];

const numbers = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

function runTests(fn) {
  numbers.forEach((number, i) => {
    test(`Return ${number} for n = ${i}`, () => {
      expect(fn(i)).toBe(number);
    });
  });
}

implementations.forEach(implementation => {
  describe(implementation.name, () => {
    runTests(implementation.fn);
  });
});
