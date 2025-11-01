/**
 * @module fibonacci
 * @see https://en.wikipedia.org/wiki/Fibonacci_sequence
 */

/**
 * 
 * @param {Integer} n 
 * @returns {Array} containing the first n fibonacci numbers 
 */
function fibs(n) {
  const arr = [];
  const f_0 = 0;
  const f_1 = 1;
  
  if (n === 0){
    return arr;
  } 
  if (n === 1) {
    arr.push(f_0);
    return arr;
  }
  if (n === 2) {
    arr.push(f_0, f_1);
    return arr;
  }

  arr.push(f_0, f_1);
  let f_iLess1 = f_1;
  let f_iLess2 = f_0;
  for (let i = 2; i < n; i++) {
    const f_i = f_iLess1 + f_iLess2;
    arr.push(f_i);
    f_iLess2 = f_iLess1;
    f_iLess1 = f_i;
  }

  return arr;
}

export {
  fibs,
};