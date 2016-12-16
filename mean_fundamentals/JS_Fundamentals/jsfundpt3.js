////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // Create a JavaScript object called person Cont.. JS Fundamentals Part III





var person = {
    name : "Dino",
    distance_traveled : 0,

  statusUpdate : function(){
    console.log(`${person.name} has a distance traveled of ${person.distance_traveled}`);
  },
  say_something : function(spokenWords){
    console.log(`${person.name} says: ${spokenWords}`);
  },
  walk : function(){
    console.log(`${person.name} is walking!`);

    person.distance_traveled += 3;
    console.log(person.distance_traveled);
    return person;
  },
  run : function(){
    console.log(`${person.name} is running!`);

    person.distance_traveled += 10;
    console.log(person.distance_traveled);
    return person;
  },
  crawl : function(){
    console.log(`${person.name} is crawling!`);

    person.distance_traveled += 1;
    console.log(person.distance_traveled);
    return person;
  }

}
person.say_something('My owner is Quinten');
person.walk();
person.run();
person.crawl();
person.statusUpdate();

var ninja = {
  name: 'Quinten',
  cohort : "MEAN JS",
  ninjaConstructor : function(){
        var beltRand = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
        var beltColor = 'yellow';
        if (beltRand === 1) {
          beltColor = "Yellow"
        }else if (beltRand === 2) {
          beltColor = "Fire"
        }else if (beltRand === 3) {
          beltColor = "Black"
        }

      console.log(`${ninja.name} ${ninja.cohort} ${beltColor}`);
  }
}
ninja.ninjaConstructor();



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// using "this" and "new"
//
//
//
//
// function person(firstName, lastName, distance_traveled) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.distance_traveled = distance_traveled;
//
// }
// var personOne = new person('Nelly', 'Walters', 0);
// var personTwo = new person('Kelly', 'Larsen', 5);
// var personThree = new person('Kelda', 'Anderson', 20);
//
// person.prototype.statusUpdate = function() {
//
//     console.log(`${this.firstName} ${this.lastName} has a distance traveled of ${this.distance_traveled}`);
//     return `${this.firstName} ${this.lastName} distance traveled is ${this.distance_traveled}`
// }
//
// person.prototype.say_something = function(spokenWords) {
//     console.log(`${this.firstName} says ${spokenWords}`);
//     return `${this.firstName} says ${spokenWords}`
// }
//
// person.prototype.walk = function() {
//     console.log(`${this.firstName} is walking`);
//
//     this.distance_traveled += 3;
//     console.log(this.distance_traveled);
// }
//
// person.prototype.run = function() {
//     console.log(`${this.firstName} is running`);
//
//     this.distance_traveled += 10;
//     console.log(this.distance_traveled);
// }
// person.prototype.crawl = function() {
//     console.log(`${this.firstName} is crawling`);
//
//     this.distance_traveled += 1;
//     console.log(this.distance_traveled);
// }
// personOne.say_something('I am cool');
// personOne.walk();
// personOne.run();
// personOne.crawl();
// personOne.statusUpdate();
//
// personTwo.say_something('I am cooler');
// personTwo.walk();
// personTwo.run();
// personTwo.crawl();
// personTwo.statusUpdate();
//
// personThree.say_something('I am cool');
// personThree.walk();
// personThree.run();
// personThree.crawl();
// personThree.statusUpdate();
//
//
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
// function ninjaConstructor(name, cohort, beltLevel) {
//     this.name = name;
//     this.cohort = cohort;
//     this.beltLevel = beltLevel;
// }
//
// var ninja_first = new ninjaConstructor('Mr. Lee', 'Python', 'yellow-belt')
// var ninja_second = new ninjaConstructor('Mrs. Anderson', 'MEAN JS', 'yellow-belt')
//
// console.log(`Our Ninja's are: ${ninja_first.name} & ${ninja_second.name}`)
//
// ninjaConstructor.prototype.levelUp = function(){
//       var beltRand = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
//       console.log(beltRand);
//       var beltColor = 'yellow';
//       if (beltRand === 1) {
//         beltColor = "Yellow"
//       }else if (beltRand === 2) {
//         beltColor = "Fire Olpal"
//       }else if (beltRand === 3) {
//         beltColor = "Black Olpal"
//       }
//
//   console.log(`${this.name}'s new level for ${this.cohort} is ${beltColor}`)
// }
//
// ninja_first.levelUp();
//
// ninja_second.levelUp();
