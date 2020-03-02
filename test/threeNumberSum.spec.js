const chai = require('chai');
const threeNumberSum = require('../threeNumberSum/threeNumberSum')

it('takes an array of positive integers', function(){
  chai.expect(threeNumberSum([1,2,3], 6)).to.deep.equal([[1,2,3]])
})
