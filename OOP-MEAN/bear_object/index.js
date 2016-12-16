function Bear(type) { // Capitalized, use new to creat an instance of a bear
    this.type = type // It equals the type we passed in
}

Bear.prototype.growl = function() { // Both instances now have this method available to them
    console.log('The ' + this.type + ' bear says grrr')
}

var grizzly = new Bear('grizzyly') // These are isntances of the Bear
var polar = new Bear('polar')

console.log(grizzly.growl(), polar.growl());
