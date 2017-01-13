var app = {};

app.add = function(numbers, callback) {
    var result = 0;
    if(numbers !== undefined && numbers.length) {
        for(number in numbers) {
            result = result + numbers[number];
        }
        if(callback !== undefined) {
            callback(result);
        }
    }
}
