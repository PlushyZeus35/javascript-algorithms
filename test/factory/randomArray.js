function shortRandomArray(){
    const array = [];
    for(let i=0; i<25; i++){
        array.push(getRndInteger(-999,999))
    }
    return array;
}

function mediumRandomArray(){
    const array = [];
    for(let i=0; i<50; i++){
        array.push(getRndInteger(-999,999))
    }
    return array;
}

function bigRandomArray(){
    const array = [];
    for(let i=0; i<100; i++){
        array.push(getRndInteger(-999,999))
    }
    return array;
}

function hugeRandomArray(){
    const array = [];
    for(let i=0; i<1000; i++){
        array.push(getRndInteger(-999,999))
    }
    return array;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

module.exports = {shortRandomArray, mediumRandomArray, bigRandomArray, hugeRandomArray};