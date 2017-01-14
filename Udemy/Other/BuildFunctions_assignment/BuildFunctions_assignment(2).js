// Some advice:
// As you and your classmates work on this assignment, different people will invariably produce different and interesting bugs. These are like gold – tackling them and understanding why they occurred will only make you a better developer and set the stage for success in the MEAN stack. That’s a long-winded way of saying: If you run into a difficult bug, be generous and invite some of your classmates over to debug with you.
//  Basic: Make a function that can be used anywhere in your file and that when invoked will console.log('I am running!'); Give it the name runningLogger.
//  Basic: Make a function that is callable, has one parameter and multiplies the value of the parameter by 10 before returning the result. Give it the name multiplyByTen. Invoke it, passing it the argument 5.
//  Basic: Write two functions (stringReturnOne and stringReturnTwo) that each return a different hard-coded string
//  Medium: Write a function named caller that has one parameter. If the argument provided to caller is a function (typeof may be useful), invoke the argument. Nothing is returned.
//  Medium: Write a function named myDoubleConsoleLog that has two parameters, if the arguments passed to the function are functions, console.log the value that each, when invoked, returns.
//  Hard: Write a function named caller2 that has one parameter. Have it console.log the string 'starting', wait 2 seconds, and then invokes the argument if the argument is a function. (setTimeout may be useful for this one.) The function should then console.log ‘ending?’ and return “interesting”. Invoke this function by passing it myDoubleConsoleLog.


function runningLogger(){
  console.log("I am running");
}

function multiplyBy10(numb){
  if (typeof(numb) == "number"){
    return numb*10;
  }
}

function stringReturnOne(){
  return "cat";
}

function stringReturnTwo(){
  return "dog";
}

function myFunctionRunner(param){
  if (typeof(param)=='function'){
    param();
  }
}
// Somewhat interesting right?
myFunctionRunner(stringReturnOne);

function myDoubleConsoleLog(param1,param2){
  if (typeof(param1) == 'function' && typeof(param2) == 'function'){
    console.log(param1(), param2());
  }
}
myDoubleConsoleLog(stringReturnOne, stringReturnTwo);

// more interesting, we hope!
function caller2(param){
  console.log('starting');
  var x = setTimeout(function(){
    if (typeof(param)=='function'){
      // notice the passed parameters...
      param(stringReturnOne, stringReturnTwo);
    }
  }, 2000);
  console.log('ending');
  return "interesting";
}

caller2(myDoubleConsoleLog);
