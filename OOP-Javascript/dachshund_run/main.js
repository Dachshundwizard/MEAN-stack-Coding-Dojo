function dachshundConstructor(name, fav_treat, energy, speed, age){
    if(!(this instanceof dachshundConstructor)){
        return new dachshundConstructor(name, fav_treat, energy, speed, age);
    }
    var chars = "0123456789QWERTYUIOPASDFGHJKLZXCVBNM";
    this.name = name;
    this.fav_treat = fav_treat;
    this.speed = speed || 1;
    this.age = age;
    this.energy = energy;

    this.tag = createTag();

    function createTag(){
        var tag = '';
        for(var i = 0; i < 6; i++){
            tag += chars[Math.floor(Math.random()*35)];
        }
        return tag;
    }
}

dachshundConstructor.prototype.run = function(){
    this.speed -= 1;
    this.energy -= 1;
    if(this.age > 9){
        console.log(`${this.name} stopped and started walking!`);
    }
    console.log(this.speed);
    console.log(this.energy);
    return this;
};

dachshundConstructor.prototype.eat = function(){
    this.energy += 1;
    this.speed += 1;
    console.log(this.speed);
    console.log(this.energy);
    return this;
}

dachshundConstructor.prototype.sleep = function(){
    this.energy += 1;
    this.speed += 1;
    console.log(this.speed);
    console.log(this.energy);
    return this;
}

var dog = new dachshundConstructor('Dino', 'Greenies', 5, 8, 8);
console.log(dog.sleep());
console.log(dog.energy);
