/*
 * Selection sort algorithm
 * Author: https://github.com/PlushyZeus35
 * Info: https://www.geeksforgeeks.org/selection-sort/
*/

function selectionSort(array){
    if(!Array.isArray(array)) throw Error('the parameter must be an array');

    for(let i=0; i<array.length; i++){
        for(let j=0; j<array.length; j++){
            if(array[j]>array[i]){
                let change = array[j];
                array[j]=array[i];
                array[i]=change;
            }
        }
    }

    return array;
}

module.exports = {selectionSort}