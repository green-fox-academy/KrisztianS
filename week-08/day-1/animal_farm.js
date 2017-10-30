'use strict'

class Animal {
    constructor() {
        this.hunger = 5;
        this.thirst = 5;
    }
    eat() {
        this.hunger -= 1;
    }
    drink() {
        this.thirst -= 1;
    }
    play() {
        this.hunger += 1;
        this.thirst += 1;
    }
}

class Farm {
    constructor(slots) {
        this.slots = slots;
        this.animals = []
    }
    breed() {
        if (this.slots >= 1) {
            let animal = new Animal
            this.animals.push(animal)
        } else {
            console.log("Farm is full, no empty slots left!")
        }
    }
    slaughter() {
        if (this.animals.length >= 1) {
            this.animals.pop()
        } else {
            console.log("You have no animals to slaughter!")
        }
    }
    print_report() {
        if (this.animals.length == 0) {
            console.log('Bankrupt!')
        } else {
        console.log('The farm has ' + this.animals.length + ' living animals(s)')
        }
    }
    progress() {
        for (let i = 0; i <= this.animals.length; i++) {
            if (Math.random() >= 0.5){
            this.animals[i].eat.bind(Animal)}
            if (Math.random() >= 0.5){
            this.animals[i].drink();}
            if (Math.random() >= 0.5){
            this.animals[i].play();}
        }
    }
}

var sheepfarm = new Farm(20)
sheepfarm.breed()
sheepfarm.breed()
sheepfarm.breed()
console.log(sheepfarm.animals)
sheepfarm.print_report()
sheepfarm.progress()
// Create a Farm constructor function

// The farm has slots which defines the number of free places for animals
// The farm has list of Animals
// The farm can breed() which creates a new animal if there's place for it
// The farm can slaughter() which removes the least hungry animal
// The farm can print reports about their current state:
// The farm has 11 living animals we are bankrupt
// The farm can progress from day to a new day by calling it's progress() method:
// All animals should have their methods called randomly with 50% chance
// The farm should call its breed and slaughter method at the end of each day
// The farm should print report at the end of each day
// Print the number of sheeps
// Print "bankrupt" if no animals left
// Print "okay" if the number of animals is above zero and under the slot number
// Print "full" if the number of animals are at the maximum allowed