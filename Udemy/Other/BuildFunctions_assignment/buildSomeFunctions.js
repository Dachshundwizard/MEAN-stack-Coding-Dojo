//Basic: Make a function that can be used anywhere in your file and that when invoked will console.log('I am running!')
//Name it function runningLogger()

// function runningLogger(){
//     console.log('I am running!');
// }
//
// runningLogger();

//basic: Make a function that is callable, has one parameter and multiplies the valur of the perameter by 10 before returning
//the result. Give it the name multiplyByTen. Invoke it, passing it the argument 5.

// function multiplyByTen(number){
//     return number * 10;
// }
//
// console.log(multiplyByTen(5));

//Write two functions (stringReturnOne and stringReturnTwo) that each return a different hard-coded string
// function stringReturnOne(){
//     return "This is the best string!";
// }
//
// function stringReturnTwo(){
//     return "This is actually the better string!";
// }
//
// console.log(stringReturnOne());
// console.log(stringReturnTwo());

// Write a function named caller that has one perameter. If the argument provided to caller is a function, invoke the
//argument. Nothing is returned.

// function caller(Param){
//     if(typeof Param === "function"){
//         console.log("Its a function!");
//         Param();
//     }
// }
//
// caller(function(){});

//Write a function named myDoubleConsoleLog that has two parameters, if the arguments passsed to the fuction are functions,
//console log the value that each returns.

function myDoubleConsoleLog(param1, param2){
    if(typeof param1 === "function"){
        console.log(param1())
    }
    if(typeof param2 === "function"){
        console.log(param2())
    }
}

myDoubleConsoleLog(function(){
    console.log('What is up?')
    return 'nothing much'
}, function(){
    return 5
})

function return1(){
    console.log("I love dogs!");
}

function return2(){
    console.log("Dogs are way better than cats...");
}

function caller2(param1){
    console.log("Starting...")
    setTimeout(function(){
        if(typeof param1 === "function"){
            console.log("About to invoke function...")
            param1(return1, return2);
        }
    }, 5000);
    console.log("Ending?")
    return "Interesting";
}

console.log(caller2(myDoubleConsoleLog));
