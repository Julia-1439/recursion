#!/usr/bin/env node
import {fibs, fibsRec} from "./fibonacci.js";
import {mergeSort} from "./mergeSort.js";

console.log(
  fibs(8)
);

console.log(
  fibsRec(8)
);

console.log(
  mergeSort([]),
  mergeSort([73]),
  mergeSort([1, 2, 3, 4, 5]),
  mergeSort([3, 2, 1, 13, 8, 5, 0, 1]),
  mergeSort([105, 79, 100, 110]),
);