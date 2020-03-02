const chai = require('chai');
const threeNumberSum = require('../threeNumberSum/threeNumberSum')

it('returns an array', function(){
  chai.expect(threeNumberSum([], 0)).to.deep.equal([]);
})
it('takes an array of positive integers', function(){
  chai.expect(threeNumberSum([1,2,3], 6)).to.deep.equal([[1,2,3]])
})

it('takes an array of negative and positive numbers and returns proper values', function(){
  chai.expect(threeNumberSum([-8, 4, 6, 3, -2], 2)).to.deep.equal([[-8,4,6]])
})

it('returns all triplet arrays, in sorted order', function() {
  chai.expect(threeNumberSum([12, 3, 1, 2, -6, 5, 0, -8, -1], 0)).to.deep.equal([
    [-8, 3, 5],
    [-6, 1, 5],
    [-1, 0, 1],
  ]);
});

it('can accommodate large return values, all sorted', function() {
  chai.expect(threeNumberSum([12, 3, 1, 2, -6, 5, 0, -8, -1, 6, -5], 0)).to.deep.equal([
    [-8, 2, 6],
    [-8, 3, 5],
    [-6, 0, 6],
    [-6, 1, 5],
    [-5, -1, 6],
    [-5, 0, 5],
    [-5, 2, 3],
    [-1, 0, 1],
  ]);
});
