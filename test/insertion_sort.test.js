/*
 * Tests for insertion sort algorithm
 * Author: https://github.com/PlushyZeus35
 * Info: https://www.geeksforgeeks.org/insertion-sort/
*/

const {insertionSort} = require('../src/sorting-algorithms/insertion_sort')
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
    expect(() => insertionSort()).toThrow(/parameter/);
    expect(() => insertionSort(1)).toThrow(/parameter/);
    expect(() => insertionSort('test')).toThrow(/parameter/);
    expect(() => insertionSort(function(){})).toThrow(/parameter/);
});

test('must return ordered array', () => {
    expect(insertionSort(arr1)).toEqual(arr1.sort(function(a, b){return b - a}));
    expect(insertionSort(arr2)).toEqual(arr2.sort(function(a, b){return b - a}));
    expect(insertionSort(arr3)).toEqual(arr3.sort(function(a, b){return b - a}));

    expect(insertionSort(arr4)).toEqual(arr4.sort(function(a, b){return b - a}));
    expect(insertionSort(arr5)).toEqual(arr5.sort(function(a, b){return b - a}));
    expect(insertionSort(arr6)).toEqual(arr6.sort(function(a, b){return b - a}));

    expect(insertionSort(arr7)).toEqual(arr7.sort(function(a, b){return b - a}));
    expect(insertionSort(arr8)).toEqual(arr8.sort(function(a, b){return b - a}));
    expect(insertionSort(arr9)).toEqual(arr9.sort(function(a, b){return b - a}));

    expect(insertionSort(arr10)).toEqual(arr10.sort(function(a, b){return b - a}));
    expect(insertionSort(arr11)).toEqual(arr11.sort(function(a, b){return b - a}));
    expect(insertionSort(arr12)).toEqual(arr12.sort(function(a, b){return b - a}));
});