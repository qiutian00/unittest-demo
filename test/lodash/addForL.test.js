
import { add } from 'lodash';
import chai from 'chai';

let expect = chai.expect;

describe('add', function() {
  it('should add two numbers', function() {
    expect(add(6, 4)).to.equal(10);
    expect(add(-6, 4)).to.equal(-2);
    expect(add(-6, -4)).to.equal(-10);
    // assert.strictEqual(add(6, 4), 10);
    // assert.strictEqual(add(-6, 4), -2);
    // assert.strictEqual(add(-6, -4), -10);
  });

  it('should not coerce arguments to numbers', function() {
    expect(add('6', '4')).to.equal('64');
    expect(add('x', '4')).to.equal('x4');
    // assert.strictEqual(add('6', '4'), '64');
    // assert.strictEqual(add('x', 'y'), 'xy');
  });
});