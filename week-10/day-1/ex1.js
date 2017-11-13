'use strict';

function Animal(sound) {
    this.sound = sound
}


Animal.prototype.say = function() {
    console.log(this.sound)
}

const dog = new Animal('wau')
const cat = new Animal ('milyau')

dog.say()
cat.say()

// Create a constructor for creating Animals.
// it should take one parameter: what the animal says
// Every animal should have a method called say() that prints what the animal says