/*
 * Tests for recursive bubble sort algorithm
 * Author: https://github.com/PlushyZeus35
 * Info: https://www.geeksforgeeks.org/recursive-bubble-sort/
*/

const {recursiveBubbleSort} = require('../src/sorting-algorithms/recursive_bubble_sort')
const {shortRandomArray, mediumRandomArray, bigRandomArray, hugeRandomArray} = require('./factory/randomArray');

const arr1 = shortRandomArray();
const arr2 = shortRandomArray();
const arr3 = shortRandomArray();

const arr4 = mediumRandomArray();
const arr5 = mediumRandomArray();
const arr6 = mediumRandomArray();

const arr7 = bigRandomArray();
const arr8 = bigRandomArray();
const arr9 = bigRandomArray();

test('parameter must be an array', () => {
    expect(() => recursiveBubbleSort()).toThrow(/parameter/);
    expect(() => recursiveBubbleSort(1)).toThrow(/parameter/);
    expect(() => recursiveBubbleSort('test')).toThrow(/parameter/);
    expect(() => recursiveBubbleSort(function(){})).toThrow(/parameter/);
});

// ! Huge arrays cause problems with depth recursion limitations on Javascript
test('must return ordered array', () => {
    expect(recursiveBubbleSort(arr1, false)).toEqual(arr1.sort(function(a, b){return b - a}));
    expect(recursiveBubbleSort(arr2, false)).toEqual(arr2.sort(function(a, b){return b - a}));
    expect(recursiveBubbleSort(arr3, false)).toEqual(arr3.sort(function(a, b){return b - a}));

    expect(recursiveBubbleSort(arr4, false)).toEqual(arr4.sort(function(a, b){return b - a}));
    expect(recursiveBubbleSort(arr5, false)).toEqual(arr5.sort(function(a, b){return b - a}));
    expect(recursiveBubbleSort(arr6, false)).toEqual(arr6.sort(function(a, b){return b - a}));

    expect(recursiveBubbleSort(arr7, false)).toEqual(arr7.sort(function(a, b){return b - a}));
    expect(recursiveBubbleSort(arr8, false)).toEqual(arr8.sort(function(a, b){return b - a}));
    expect(recursiveBubbleSort(arr9, false)).toEqual(arr9.sort(function(a, b){return b - a}));
});