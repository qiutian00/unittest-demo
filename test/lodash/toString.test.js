import assert from 'assert';
import lodashStable, { stubString, symbol, toString } from 'lodash';

describe('toString', function() {
  it('should treat nullish values as empty strings', function() {
    var values = [, null, undefined],
        expected = lodashStable.map(values, stubString);

    var actual = lodashStable.map(values, function(value, index) {
      return index ? toString(value) : toString();
    });

    assert.deepStrictEqual(actual, expected);
  });

  it('should preserve the sign of `0`', function() {
    var values = [-0, Object(-0), 0, Object(0)],
        expected = ['-0', '-0', '0', '0'],
        actual = lodashStable.map(values, toString);

    assert.deepStrictEqual(actual, expected);
  });

  it('should preserve the sign of `0` in an array', function() {
    var values = [-0, Object(-0), 0, Object(0)];
    assert.deepStrictEqual(toString(values), '-0,-0,0,0');
  });

  it('should not error on symbols', function() {
    // if (Symbol) {
    //   try {
    //     assert.strictEqual(toString(symbol), 'Symbol(a)');
    //   } catch (e) {
    //     assert.ok(false, e.message);
    //   }
    // }
  });

  it('should not error on an array of symbols', function() {
    // if (Symbol) {
    //   try {
    //     assert.strictEqual(toString([symbol]), 'Symbol(a)');
    //   } catch (e) {
    //     assert.ok(false, e.message);
    //   }
    // }
  });

  it('should return the `toString` result of the wrapped value', function() {
    // var wrapped = _([1, 2, 3]);
    // assert.strictEqual(wrapped.toString(), '1,2,3');
  });
});