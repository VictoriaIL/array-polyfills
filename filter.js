function myFilter(array, callback, context) {
    let resultArray = [];
    for (let i = 0; i < array.length; i++) {
        if (callback.call(context, array[i], i, array)){
            resultArray.push(array[i]);
        }
    }
    return resultArray;
}


arr = [1, 2, 3, 4, 5];
filter = myFilter(arr, function(item, index, array){
        return item < 3;
});

console.log(filter);
