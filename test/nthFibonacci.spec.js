const chai = require('chai');
const nthFibonacci = require('../nthFibonacci/nthFibonacci')

it('Test num 1', function() {
  chai.expect(nthFibonacci(1)).to.deep.equal(0);
});

it('Test num 2', function() {
  chai.expect(nthFibonacci(2)).to.deep.equal(1);
});

it('Test num 3', function() {
  chai.expect(nthFibonacci(3)).to.deep.equal(1);
});

it('Test num 4', function() {
  chai.expect(nthFibonacci(4)).to.deep.equal(2);
});

it('Test num 5', function() {
  chai.expect(nthFibonacci(5)).to.deep.equal(3);
});

it('Test num 6', function() {
  chai.expect(nthFibonacci(6)).to.deep.equal(5);
});

it('Test num 7', function() {
  chai.expect(nthFibonacci(7)).to.deep.equal(8);
});

it('Test num 8', function() {
  chai.expect(nthFibonacci(8)).to.deep.equal(13);
});

it('Test num 9', function() {
  chai.expect(nthFibonacci(9)).to.deep.equal(21);
});

it('Test num 10', function() {
  chai.expect(nthFibonacci(10)).to.deep.equal(34);
});

it('Test num 11', function() {
  chai.expect(nthFibonacci(11)).to.deep.equal(55);
});

it('Test num 12', function() {
  chai.expect(nthFibonacci(12)).to.deep.equal(89);
});
