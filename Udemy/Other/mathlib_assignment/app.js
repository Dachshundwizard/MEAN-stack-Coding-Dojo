var mylib = require('./mathlib');
var math = new mylib();

q = 1;
w = 35;

console.log("\nSum of " + q + " and " + w + " is: ", math.add(q, w));
console.log("The product of " + q + " and " + w + " is: ", math.multiply(q, w));
console.log("The square of " + q + " is: ", math.square(w));
console.log("Here is a randomly generated value between " + q + " and " + w + ":", math.random(q, w));
