var R = require('../source');
var eq = require('./shared/eq');
var assert = require('assert');

describe('aperture', function() {
  var sevenLs = [1, 2, 3, 4, 5, 6, 7];
  it('creates a list of n-tuples from a list', function() {
    eq(R.aperture(1, sevenLs), [[1], [2], [3], [4], [5], [6], [7]]);
    eq(R.aperture(2, sevenLs), [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]]);
    eq(R.aperture(3, sevenLs), [[1, 2, 3], [2, 3, 4], [3, 4, 5], [4, 5, 6], [5, 6, 7]]);
    eq(R.aperture(4, [1, 2, 3, 4]), [[1, 2, 3, 4]]);
  });

  it('returns an empty list when `n` > `list.length`', function() {
    eq(R.aperture(6, [1, 2, 3]), []);
    eq(R.aperture(1, []), []);
  });

  it('can act as a transducer', function() {
    eq(R.into([], R.aperture(2), sevenLs), [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]]);
  });

  it('throws if first argument is not an integer greater than zero', function() {
    var test = function(err) {
      return err.constructor === Error &&
             err.message === 'First argument to aperture must be an integer greater than zero';
    };
    assert.throws(function() { R.aperture(0, sevenLs); }, test);
    assert.throws(function() { R.aperture(-1, sevenLs); }, test);
    assert.throws(function() { R.aperture(-2, sevenLs); }, test);
    assert.throws(function() { R.aperture(1.5, sevenLs); }, test);
    assert.throws(function() { R.aperture(2.3, sevenLs); }, test);
    assert.throws(function() { R.aperture('a', sevenLs); }, test);
    assert.throws(function() { R.aperture('abc', sevenLs); }, test);
    assert.throws(function() { R.aperture(true, sevenLs); }, test);
    assert.throws(function() { R.aperture(false, sevenLs); }, test);
  });

});
