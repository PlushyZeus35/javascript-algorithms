/*
 * Bubble sort algorithm
 * Author: https://github.com/PlushyZeus35
 * Info: https://www.geeksforgeeks.org/bubble-sort/
*/

function bubbleSort(array){
    if(!Array.isArray(array)) throw Error('the parameter must be an array');
    let ordered = false;
    while(!ordered){
        ordered = true;
        array.forEach((element, index) => {
            for(let i=0; i<(array.length-1); i++){
                if((i+1)<array.length){
                    if(array[i]>array[i+1]){
                        let change = array[i];
                        array[i] = array[i+1];
                        array[i+1] = change;
                        ordered = false;
                    }
                }
            }
        })
    }
    return array;
}

module.exports = {bubbleSort}