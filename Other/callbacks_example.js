console.log("NOW: ");
console.log("Declaring and assigning variable 'ninja'.");
var ninja = 'Libby';

setTimeout(function myCallbackFunction(){
    console.log("LATER: ")
    console.log(ninja, "LATER"); }, 2000);

console.log("Printing ninja value.");
console.log(ninja, "NOW");
//////////////////////////////////////////////////////////////////

function makePasta(pasta, makeSauce){ // 'makeSauce' is our callb
    console.log("Boiling water...");
    console.log("Putting " + pasta + " pasta in the water...");
    var sauce = makeSauce();
    console.log("Mixing sauce...");
    console.log("Pasta is done!");
    return pasta + " Pasta with " + sauce + " sauce! Voila!";
}
function makePesto() {
    console.log("Making Pesto...");
    return "pesto";
}

console.log(makePasta("Penne", makePesto));

//////////////////////////////////////////////////////////////////
// The javascript engine will not look at the event Queue until the execution stack is empty.
// Therefor the "click event" will not show up until the page has loaded/functions have ran.
// Long running function
function waitThreeSeconds() { // This function will force the function to wait three seconds
    var ms = 3000 + new Date().getTime();
    while(new Date() < ms){}
    console.log('finished function');
}

function clickHandler() {
    console.log('click event!');
}

// Listen for the click event
document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('finished execution');
