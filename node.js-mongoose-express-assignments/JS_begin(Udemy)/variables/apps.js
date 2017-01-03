// var names = ['Alex', 'Billy', 'Dale']; // gets stred as an object
//
// // names.splice(1,1);
// //
// // names[3] = 'Sheba';
// // names[1] = 'Billy';
// // names['colour'] = 'Blue';
// // console.log(names);
//
// // for(name in names) {
// //     console.log(names);
// // }
//
// for(var x = 0; x <= names.length -1; x++){
//     console.log(names[x]);
// }

// var app = {
//     version: 1.1,
//     name: 'Brilliant app',
//     getVersion: function() {
//         return this.version;
//     }
// };

// var getTime = function() {
//     console.log(new Date().getTime());
// },
// interval = setInterval(getTime, 1000);

var x = 1,
    interval = setInterval(function(){
        console.log(x);
        x++;
        if(x === 11) {
            clearInterval(interval);
        }
    }, 1000);
