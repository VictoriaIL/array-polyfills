
function myForEach(array, callback, context) {
    for (let i = 0; i < array.length; i++) {
      callback.call(context, array[i], i, array);
    }
}

arr = [1, 2, 3, 4, 5]
myForEach(arr, (  item, index, array) => {
    console.log(array)
   console.log('item: ' + item + ' index: ' + index + ' array: ' + array)
});






