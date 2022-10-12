/*
 * Recursive bubble sort algorithm
 * Author: https://github.com/PlushyZeus35
 * Info: https://www.geeksforgeeks.org/recursive-bubble-sort/
*/

function recursiveBubbleSort(array, ordered){
    if(!Array.isArray(array)) throw Error('the parameter must be an array');
    if(ordered){
        return array
    }
    ordered = true;
    for(let i=0; i<(array.length-1); i++){
        if(array[i]>array[i+1]){
            ordered = false;
            let change = array[i];
            array[i] = array[i+1];
            array[i+1] = change;
        }
    }
    return recursiveBubbleSort(array, ordered);

}

module.exports = {recursiveBubbleSort}