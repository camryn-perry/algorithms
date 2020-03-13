const chai = require('chai');
const balancedBrackets = require('../balancedBrackets/balancedBrackets');

it('doesnt accept empty strings', function() {
  chai.expect(balancedBrackets("")).to.deep.equal(false);
});

it('returns true for brackets of same type', function () {
  chai.expect(balancedBrackets("{{{{{}}}}}")).to.deep.equal(true);
});

it('returns false for brackets of same type if unbalanced', function () {
  chai.expect(balancedBrackets("{}{")).to.deep.equal(false);
});
