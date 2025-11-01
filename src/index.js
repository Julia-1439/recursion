#!/usr/bin/env node
import {fibs, fibsRec} from "./fibonacci.js";
import {mergeSort, merge} from "./mergeSort.js";

// console.log(
//   fibs(8)
// );

// console.log(
//   fibsRec(8)
// );


let A = [2,8,15,18];
let B = [5,9,12,17];
console.log(merge(A, B));

A = [1,2,7,8];
B = [3,5,6,9,10,12];
console.log(merge(A,B));