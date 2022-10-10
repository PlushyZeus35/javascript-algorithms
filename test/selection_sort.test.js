/*
 * Tests for selection sort algorithm
 * Author: https://github.com/PlushyZeus35
 * Info: https://www.geeksforgeeks.org/selection-sort/
*/

const {selectionSort} = require('../src/sorting-algorithms/selection_sort')
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
    expect(() => selectionSort()).toThrow(/parameter/);
    expect(() => selectionSort(1)).toThrow(/parameter/);
    expect(() => selectionSort('test')).toThrow(/parameter/);
    expect(() => selectionSort(function(){})).toThrow(/parameter/);
});

test('must return ordered array', () => {
    expect(selectionSort(arr1)).toEqual(arr1.sort(function(a, b){return b - a}));
    expect(selectionSort(arr2)).toEqual(arr2.sort(function(a, b){return b - a}));
    expect(selectionSort(arr3)).toEqual(arr3.sort(function(a, b){return b - a}));

    expect(selectionSort(arr4)).toEqual(arr4.sort(function(a, b){return b - a}));
    expect(selectionSort(arr5)).toEqual(arr5.sort(function(a, b){return b - a}));
    expect(selectionSort(arr6)).toEqual(arr6.sort(function(a, b){return b - a}));

    expect(selectionSort(arr7)).toEqual(arr7.sort(function(a, b){return b - a}));
    expect(selectionSort(arr8)).toEqual(arr8.sort(function(a, b){return b - a}));
    expect(selectionSort(arr9)).toEqual(arr9.sort(function(a, b){return b - a}));

    expect(selectionSort(arr10)).toEqual(arr10.sort(function(a, b){return b - a}));
    expect(selectionSort(arr11)).toEqual(arr11.sort(function(a, b){return b - a}));
    expect(selectionSort(arr12)).toEqual(arr12.sort(function(a, b){return b - a}));
});