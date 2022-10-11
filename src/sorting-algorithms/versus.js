/*
 * Tests performance for sorting algorithms
 * Author: https://github.com/PlushyZeus35
*/

const {selectionSort} = require('./selection_sort')
const {bubbleSort} = require('./bubble_sort')
const {shortRandomArray, mediumRandomArray, bigRandomArray, hugeRandomArray} = require('../../test/factory/randomArray');
const CONSTANTS = require('../constants');

function versus(){
    console.log("Setting up data...")
    const shortArray1 = shortRandomArray();
    const shortArray2 = shortRandomArray();
    const mediumArray1 = mediumRandomArray();
    const mediumArray2 = mediumRandomArray();
    const bigArray1 = bigRandomArray();
    const bigArray2 = bigRandomArray();
    const hugeArray1 = hugeRandomArray();
    const hugeArray2 = hugeRandomArray();

    console.log("Running algorithms...");

    console.log("Selection sort!")
    let start = Date.now()
    selectionSort(shortArray1);
    const selectionShort = (Date.now() - start) / 1000;
    console.log("Array with " + CONSTANTS.ARRAYLENGTH.SHORT + " values finished in " + selectionShort + " seconds.");

    start = Date.now();
    selectionSort(mediumArray1);
    const selectionMedium = (Date.now() - start) / 1000;
    console.log("Array with " + CONSTANTS.ARRAYLENGTH.MEDIUM + " values finished in " + selectionMedium + " seconds.");

    start = Date.now();
    selectionSort(bigArray1);
    const selectionBig = (Date.now() - start) / 1000;
    console.log("Array with " + CONSTANTS.ARRAYLENGTH.BIG + " values finished in " + selectionBig + " seconds.");

    start = Date.now();
    selectionSort(hugeArray1);
    const selectionHuge = (Date.now() - start) / 1000;
    console.log("Array with " + CONSTANTS.ARRAYLENGTH.HUGE + " values finished in " + selectionHuge + " seconds.");

    console.log("Bubble sort!")
    start = Date.now()
    bubbleSort(shortArray2);
    const bubbleShort = (Date.now() - start) / 1000;
    console.log("Array with " + CONSTANTS.ARRAYLENGTH.SHORT + " values finished in " + bubbleShort + " seconds.");

    start = Date.now();
    bubbleSort(mediumArray2);
    const bubbleMedium = (Date.now() - start) / 1000;
    console.log("Array with " + CONSTANTS.ARRAYLENGTH.MEDIUM + " values finished in " + bubbleMedium + " seconds.");

    start = Date.now();
    bubbleSort(bigArray2);
    const bubbleBig = (Date.now() - start) / 1000;
    console.log("Array with " + CONSTANTS.ARRAYLENGTH.BIG + " values finished in " + bubbleBig + " seconds.");

    start = Date.now();
    bubbleSort(hugeArray2);
    const bubbleHuge = (Date.now() - start) / 1000;
    console.log("Array with " + CONSTANTS.ARRAYLENGTH.HUGE + " values finished in " + bubbleHuge + " seconds.");

    console.log("Average time of algorithms...");
    const shortArrays = mediaShortArrays();
    const mediumArrays = mediaMediumArrays();
    const bigArrays = mediaBigArrays();
    const hugeArrays = mediaHugeArrays();

    console.log("Average results:");
    console.log("SHORT ARRAYS");
    console.log("Selection sort: " + shortArrays.selectionMedia + " seconds. Bubble sort: " + shortArrays.bubbleMedia + " seconds");
    console.log("MEDIUM ARRAYS");
    console.log("Selection sort: " + mediumArrays.selectionMedia + " seconds. Bubble sort: " + mediumArrays.bubbleMedia + " seconds");
    console.log("BIG ARRAYS");
    console.log("Selection sort: " + bigArrays.selectionMedia + " seconds. Bubble sort: " + bigArrays.bubbleMedia + " seconds");
    console.log("HUGE ARRAYS");
    console.log("Selection sort: " + hugeArrays.selectionMedia + " seconds. Bubble sort: " + hugeArrays.bubbleMedia + " seconds");
    
}

function mediaShortArrays(){
    let selectionTimes = 0;
    for(let i=0 ; i<CONSTANTS.LIMITS.MEDIA; i++){
        const shortArray = shortRandomArray();
        let start = Date.now();
        selectionSort(shortArray);
        selectionTimes += (Date.now() - start) / 1000;
    }

    let bubbleTimes = 0;
    for(let i=0 ; i<CONSTANTS.LIMITS.MEDIA; i++){
        const shortArray = shortRandomArray();
        let start = Date.now();
        bubbleSort(shortArray);
        bubbleTimes += (Date.now() - start) / 1000;
    }

    return results = {
        selectionMedia: selectionTimes/CONSTANTS.LIMITS.MEDIA,
        bubbleMedia: bubbleTimes/CONSTANTS.LIMITS.MEDIA
    }
}

function mediaMediumArrays(){
    let selectionTimes = 0;
    for(let i=0 ; i<CONSTANTS.LIMITS.MEDIA; i++){
        const mediumArray = mediumRandomArray();
        let start = Date.now();
        selectionSort(mediumArray);
        selectionTimes += (Date.now() - start) / 1000;
    }

    let bubbleTimes = 0;
    for(let i=0 ; i<CONSTANTS.LIMITS.MEDIA; i++){
        const mediumArray = mediumRandomArray();
        let start = Date.now();
        bubbleSort(mediumArray);
        bubbleTimes += (Date.now() - start) / 1000;
    }

    return results = {
        selectionMedia: selectionTimes/CONSTANTS.LIMITS.MEDIA,
        bubbleMedia: bubbleTimes/CONSTANTS.LIMITS.MEDIA
    }
}

function mediaBigArrays(){
    let selectionTimes = 0;
    for(let i=0 ; i<CONSTANTS.LIMITS.MEDIA; i++){
        const bigArray = bigRandomArray();
        let start = Date.now();
        selectionSort(bigArray);
        selectionTimes += (Date.now() - start) / 1000;
    }

    let bubbleTimes = 0;
    for(let i=0 ; i<CONSTANTS.LIMITS.MEDIA; i++){
        const bigArray = bigRandomArray();
        let start = Date.now();
        bubbleSort(bigArray);
        bubbleTimes += (Date.now() - start) / 1000;
    }

    return results = {
        selectionMedia: selectionTimes/CONSTANTS.LIMITS.MEDIA,
        bubbleMedia: bubbleTimes/CONSTANTS.LIMITS.MEDIA
    }
}

function mediaHugeArrays(){
    let selectionTimes = 0;
    for(let i=0 ; i<CONSTANTS.LIMITS.MEDIA; i++){
        const hugeArray = hugeRandomArray();
        let start = Date.now();
        selectionSort(hugeArray);
        selectionTimes += (Date.now() - start) / 1000;
    }

    let bubbleTimes = 0;
    for(let i=0 ; i<CONSTANTS.LIMITS.MEDIA; i++){
        const hugeArray = hugeRandomArray();
        let start = Date.now();
        bubbleSort(hugeArray);
        bubbleTimes += (Date.now() - start) / 1000;
    }

    return results = {
        selectionMedia: selectionTimes/CONSTANTS.LIMITS.MEDIA,
        bubbleMedia: bubbleTimes/CONSTANTS.LIMITS.MEDIA
    }
}

versus();

