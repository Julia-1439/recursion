function mergeSort(arr) {

}

/**
 * 
 * @param {Array{Number}} sortedArr1 already sorted 
 * @param {Array{Number}} sortedArr2 already sorted
 * @returns {Array{Number}} a sorted array created by merging sortedArr1 and
 * sortedArr2
 */
function merge(sortedArr1, sortedArr2) {
  let i = 0;
  let j = 0;
  let k = 0;

  const mergedArr = [];
  // compare elements so long as both pointers are within the bounds
  while (i < sortedArr1.length && j < sortedArr2.length) {
    const a_i = sortedArr1[i];
    const b_j = sortedArr2[j];

    if (a_i < b_j) {
      mergedArr[k++] = a_i;
      i++;
    }
    else {
      mergedArr[k++] = b_j;
      j++;
    }
  }

  // an index is out of bound: copy all elements from the in-bounds array
  if (i >= sortedArr1.length)
    mergedArr.push(...sortedArr2.slice(j));
  else if (j >= sortedArr2.length)
    mergedArr.push(...sortedArr1.slice(i));

  return mergedArr;
}

export {
  mergeSort,
  merge, // for testing only
};
