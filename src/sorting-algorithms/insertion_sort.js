/*
 * Insertion sort algorithm
 * Author: https://github.com/PlushyZeus35
 * Info: https://www.geeksforgeeks.org/insertion-sort/
*/

function insertionSort(array){
    if(!Array.isArray(array)) throw Error('the parameter must be an array');
    
    for(let i=0; i<(array.length-1); i++){
        if(array[i] > array[i+1]){
            let change = array[i+1];
            array[i+1] = array[i];
            array[i] = change;
            let j = i;
            let z = i-1;
            while(array[j]<array[z]){
                change = array[j];
                array[j] = array[z];
                array[z] = change;
                j--;
                z--;
            }
        }
    }
    return array;
}

module.exports = {insertionSort}