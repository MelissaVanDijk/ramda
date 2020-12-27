import _isInteger from './_isInteger.js';

export default function _aperture(n, list) {
  if (!_isInteger(n) || n < 1) {
    throw new Error('First argument to aperture must be an integer greater than zero');
  }
  var idx = 0;
  var limit = list.length - (n - 1);
  var acc = new Array(limit >= 0 ? limit : 0);
  while (idx < limit) {
    acc[idx] = Array.prototype.slice.call(list, idx, idx + n);
    idx += 1;
  }
  return acc;
}
