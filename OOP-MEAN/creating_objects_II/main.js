function VehicleConstructor(name, wheels, passengerNumber, speed){
    if(!(this instanceof VehicleConstructor)){
        return new VehicleConstructor(name, wheels, passengerNumber, speed);
    }
    var self = this;

    //Private variables//
    var distance_travelled = 0;
    //Private methods//
    function updateDistanceTravelled(){
        distance_travelled += self.speed;
    }
    this.speed = speed || 0;
    this.name = name || "unicycle";
    this.wheels = wheels || 1;
    this.passengerNumber = passengerNumber || 0;
  /*
    methods
  */
  this.makeNoise = function(noise){
    var noise = noise || "Honk Honk";
    console.log(noise)
  }
  this.move = function(){
      updateDistanceTravelled();
      this.makeNoise();
  }
  this.checkMiles = function(){
      return distance_travelled; //We have the ability to check what distance_travelled is, but not the ability to alter it
  }
}

var bus = new VehicleConstructor('Bus', 8, 35, 60);
console.log(bus.checkMiles());
bus.move();
console.log(bus.checkMiles());
