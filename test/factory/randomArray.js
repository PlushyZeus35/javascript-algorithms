const CONSTANTS = require('../../src/constants');

function shortRandomArray(){
    const array = [];
    for(let i=0; i<CONSTANTS.ARRAYLENGTH.SHORT; i++){
        array.push(getRndInteger(CONSTANTS.LIMITS.MINIMUM, CONSTANTS.LIMITS.MAXIMUM))
    }
    return array;
}

function mediumRandomArray(){
    const array = [];
    for(let i=0; i<CONSTANTS.ARRAYLENGTH.MEDIUM; i++){
        array.push(getRndInteger(CONSTANTS.LIMITS.MINIMUM, CONSTANTS.LIMITS.MAXIMUM))
    }
    return array;
}

function bigRandomArray(){
    const array = [];
    for(let i=0; i<CONSTANTS.ARRAYLENGTH.BIG; i++){
        array.push(getRndInteger(CONSTANTS.LIMITS.MINIMUM, CONSTANTS.LIMITS.MAXIMUM))
    }
    return array;
}

function hugeRandomArray(){
    const array = [];
    for(let i=0; i<CONSTANTS.ARRAYLENGTH.HUGE; i++){
        array.push(getRndInteger(CONSTANTS.LIMITS.MINIMUM, CONSTANTS.LIMITS.MAXIMUM))
    }
    return array;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

module.exports = {shortRandomArray, mediumRandomArray, bigRandomArray, hugeRandomArray};