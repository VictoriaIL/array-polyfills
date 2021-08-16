function myEvery(array, callback, context) {
    let conditionForEveryElement = true;
    for (let i = 0; i < array.length; i++) {
        if (callback.call(context, array[i], i, array)){
            conditionForEveryElement = false;
        }
    }
    return conditionForEveryElement;

}


arr = [1, 2, -2, 4, 5];
let every = myEvery(arr, function(item){
    return item < 0;
});

console.log(every);
