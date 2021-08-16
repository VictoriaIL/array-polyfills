function myMap(array, callback, context) {
    let resultArray = [];
    console.log(this)
    for (let i = 0; i < array.length; i++) {
        resultArray.push(callback.call(this.arr, array[i], i, array));
    }
    return resultArray;
}

arr = [1, 2, 3, 4, 5];


console.log(myMap(arr, function(item, index, array){
    return item += 1;
}.bind(arr)))
