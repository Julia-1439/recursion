/**
 * @module fibonacci
 * @see https://en.wikipedia.org/wiki/Fibonacci_sequence
 */

/**
 * Obtain the first n fibonacci numbers iteratively
 * @param {Integer} n greater than or equal to 0 
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

  arr.push(f_0, f_1);
  for (let i = 2; i < n; i++) {
    const f_i = arr[i-1] + arr[i-2];
    arr.push(f_i);
  }

  return arr;
}

/**
 * Obtain the first n fibonacci numbers recursively
 * @param {Integer} n greater than or equal to 0 
 * @returns {Array} containing the first n fibonacci numbers 
 */
function fibsRec(n) {
  if (n === 0)
    return [];
  if (n === 1)
    return [0];
  if (n === 2)
    return [0, 1];

  const priorFibs = fibsRec(n-1);
  const f_curr = priorFibs.at(-1) + priorFibs.at(-2);
  return priorFibs.concat([f_curr]);
}

export {
  fibs,
  fibsRec,
};