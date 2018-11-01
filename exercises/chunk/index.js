// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    let out = [];
    let index = 0;
    while(index<array.length){
        let last = (index+size)>array.length? array.length:(index+size);
        out.push(array.slice(index,last));
        index+=size;
    }
    return out;
}

/*
//solution 1
function chunk(array, size) {
    let out = [];
    let location = 0;
    while(location<array.length){
        out.push(nextElements(array,location,size));
        location+=size;
    }
    return out;
}
function nextElements(array,location,size){
    let out = new Array();
    let previousLocation = location;
    while(location<array.length && (location-previousLocation)<size){
        out.push(array[location]);
        location++;
    }
    return out;
}
*/

module.exports = chunk;
