var _ = {
    reduce: function(arr, callback) {
        var accumulatedValue = arr[0]; // capture the first value
        for(var i = 1; i < arr.length; i++){
            accumulatedValue = callback(accumulatedValue, arr[i]);
        }
        return accumulatedValue;
    }
}

var result = _.reduce([1,2,6,8], function(accumulator, value){
    return accumulator + value;
})

console.log(result);
