function myFind(array, callback, context) {
    for (let i = 0; i < array.length; i++) {
        if (callback.call(context, array[i], i, array)){
            return array[i];
        }
    }
}


arr = [1, 2, 3, 4, 5];
let find = myFind(arr, function(item){
    return item < 3;
});

console.log(find);
