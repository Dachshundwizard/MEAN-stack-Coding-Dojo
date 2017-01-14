// function greet(whatToSay) { //a function that returns a function
//
//     return function(name) {
//         console.log(whatToSay + ' ' + name);
//     }
// }
//
// greet('Hi')('Tony'); // Invoking a function that returns a function, and I can invoke that one too
//

// function buildFunctions() { //Going to add three new function objects
//     var arr = [];
//     for(var i = 0; i < 3; i++) {
//         arr.push(
//             function() {
//                 console.log(i);
//             }
//         )
//     }
//     return arr;
// }
//
// var fs = buildFunctions();
//
// fs[0](); //calling the first item, as it is a function
// fs[1]();
// fs[2]();
// // This will log [3,3,3]

function buildFunctions2() {
    var arr = [];
    for(var i = 0; i < 3; i++){
        arr.push(
            (function(j) {
                return function() {
                    console.log(j);
                }
            }(i))
        )
    }
    return arr;
}
var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();
