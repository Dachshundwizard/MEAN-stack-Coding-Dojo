// Create a simple for loop that sums all the integers between x and y (inclusive). Have it console log the final sum.
// var getSum = function(x, y){
//     var sum = 0;
//     for(var i = x; i <= y; i++){
//         sum += i;
//     }
//     return sum
// }
//
// getSum(0,100);
// Write a loop that will go through an array, find the minimum value, and then return it
//
// var throughArr = function(arr){
//     var min = arr[0];
//     for(var i = 1; i < arr.length; i++){
//         if(arr[i] < min){
//             console.log("Replacing min with: ", arr[i]);
//             console.log(`Replacing min with ${arr[i]}`);
//             min = arr[i];
//         }
//     }
//     return min;
//     console.log("The min is: " + min);
// }
//
// throughArr([1,3,-5,4,-15,3,4,5,22,-22])
//
//
// Write a loop that will go through an array, find the average of all of the values, and then return it
//
//
// var findAvg = function(arr){
//     var sum = arr[0];
//     for(var i = 1; i < arr.length; i++){
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }
// console.log(findAvg([17,14,-55,12]));

////////////////////////////////////////////////////////////////////////////////////////

// var myObject = { // These are the key names
//                 getSum : function(x, y){
//                     var sum = 0;
//                     for(var i = x; i <= y; i++){
//                         sum += i;
//                     }
//                     return sum
//                 },
//                 throughArr : function(arr){
//                     var min = arr[0];
//                     for(var i = 1; i < arr.length; i++){
//                         if(arr[i] < min){
//                             console.log("Replacing min with: ", arr[i]);
//                             console.log(`Replacing min with ${arr[i]}`);
//                             min = arr[i];
//                         }
//                     }
//                     return min;
//                     console.log("The min is: " + min);
//                 },
//                 findAvg : function(arr){
//                     var sum = arr[0];
//                     for(var i = 1; i < arr.length; i++){
//                         sum += arr[i];
//                     }
//                     return sum / arr.length;
//                 }
//                 }
// console.log(myObject.getSum(0,2));

// Properties
// name - set this as your own name
// distance_traveled - set this initially as zero
// Methods
// say_name - should alert the object’s name property
// say_something - have it accept a parameter. This function should then say for example “{{your name}} says ‘I am cool’” if you pass ‘I am cool’ as an argument to this method.
// walk - have it alert for example “{{your name}} is walking” and increase distance_traveled by 3
// run - have it alert for example “{{your name}} is running” and increase distance_traveled by 10
// crawl - have it alert for example “{{your name}} is crawling” and increase distance_traveled by 1


var person = { // Person object with key:value pairs.
            name : "Quinten", // This is a property - it just points to a piece of data
            distance_traveled : 0, // This is a property - it just points to a piece of data
            say_name : function(){ // This is a method, the key points to a function that we can envoke
                console.log(person.name);
            },
            say_something : function(phrase){ // This is a method, the key points to a function that we can envoke
                console.log(`${person.name} says: ${phrase}`)
            },
            walk : function(){ // This is a method, the key points to a function that we can envoke
                console.log(`${person.name} is walking!`);
                person.distance_traveled += 3;
                return person;
            },
            run : function(){ // This is a method, the key points to a function that we can envoke
                console.log(`${person.name} is running!`);
                person.distance_traveled += 10;
                return person;
            },
            crawl : function(){ // This is a method, the key points to a function that we can envoke
                console.log(`${person.name} is crawling!`);
                person.distance_traveled += 1;
                return person;
            }
            }
console.log(person.distance_traveled);
person.walk().run().crawl();
console.log(person.distance_traveled);
