console.log("I am running from node.")
console.log("Hello!")

var myarr = [1,5,25,125,42];

for(var index in myarr){
    console.log(myarr[index]*5);
}

var myobject = {
                language: "Javascript",
                dojo: "Washington DC",
                favorite_instructor: "Quinten"
                }
Object.keys(myobject).forEach(function(key,value){
    console.log(key, myobject[key]);
})


for(var i = 0; i < myarr.length; i++){
    console.log(myarr[i]*5);
}

for(var key in myobject){
    console.log(key, myobject[key])
}
