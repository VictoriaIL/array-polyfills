function myMap(array, callback, context) {
    let resultArray = [];
    for (let i = 0; i < array.length; i++) {
        resultArray.push(callback.call(context, array[i], i, array));
    }
    return resultArray;
}

arr = [1, 2, 3, 4, 5];

myMap(arr, function(item){
    return item += 1;
})

