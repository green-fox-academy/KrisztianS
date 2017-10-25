'use strict';

function factorio(num) {
    var temp = 1
    for (var i = 1; i <= num; i++) {
        temp *= i
    } return temp
};

console.log(factorio(5))

// - Create a function called `factorio`
//   that returns it's input's factorial