function mySome(array, callback, context) {
    let conditionForSomeElement = false;
    for (let i = 0; i < array.length; i++) {
        if (callback.call(context, array[i], i, array)){
            conditionForSomeElement = true;
        }
    }
    return conditionForSomeElement;
}


arr = [1, 2, -2, 4, 5];
let some = mySome(arr, function(item){
    return item < 0;
});

console.log(some);
