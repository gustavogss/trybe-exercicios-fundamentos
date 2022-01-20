const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }
  return a + b;
}

assert.strictEqual(typeof sum, 'function'); 
assert.strictEqual(sum(4,5), 9);
assert.strictEqual(0,0, 0);
assert.throws(()=>{
    sum (4, '5');
});
assert.throws(()=>{
    sum (4, '5');
}, /^Error: parameter must be numbers$/);