/*
 * Tests for selection sort algorithm
 * Author: https://github.com/PlushyZeus35
 * Info: https://www.geeksforgeeks.org/selection-sort/
*/

const {bubbleSort} = require('../src/sorting-algorithms/bubble_sort')
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

const arr10 = hugeRandomArray();
const arr11 = hugeRandomArray();
const arr12 = hugeRandomArray();

test('parameter must be an array', () => {
    expect(() => bubbleSort()).toThrow(/parameter/);
    expect(() => bubbleSort(1)).toThrow(/parameter/);
    expect(() => bubbleSort('test')).toThrow(/parameter/);
    expect(() => bubbleSort(function(){})).toThrow(/parameter/);
});

test('must return ordered array', () => {
    expect(bubbleSort(arr1)).toEqual(arr1.sort(function(a, b){return b - a}));
    expect(bubbleSort(arr2)).toEqual(arr2.sort(function(a, b){return b - a}));
    expect(bubbleSort(arr3)).toEqual(arr3.sort(function(a, b){return b - a}));

    expect(bubbleSort(arr4)).toEqual(arr4.sort(function(a, b){return b - a}));
    expect(bubbleSort(arr5)).toEqual(arr5.sort(function(a, b){return b - a}));
    expect(bubbleSort(arr6)).toEqual(arr6.sort(function(a, b){return b - a}));

    expect(bubbleSort(arr7)).toEqual(arr7.sort(function(a, b){return b - a}));
    expect(bubbleSort(arr8)).toEqual(arr8.sort(function(a, b){return b - a}));
    expect(bubbleSort(arr9)).toEqual(arr9.sort(function(a, b){return b - a}));

    expect(bubbleSort(arr10)).toEqual(arr10.sort(function(a, b){return b - a}));
    expect(bubbleSort(arr11)).toEqual(arr11.sort(function(a, b){return b - a}));
    expect(bubbleSort(arr12)).toEqual(arr12.sort(function(a, b){return b - a}));
});