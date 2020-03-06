const chai = require('chai');
const nthFibonacci = require('../nthFibonacci/nthFibonacci')

it('test case for first fib', function() {
  chai.expect(nthFibonacci(1)).to.deep.equal(0);
});

it('test case for second fib', function() {
  chai.expect(nthFibonacci(2)).to.deep.equal(1);
});
