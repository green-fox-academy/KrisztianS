'use strict';

function sum(num) {
    var temp_sum = 0
    for (var i = 1; i <= num; i++) {
        temp_sum += i
    } return temp_sum
};

console.log(sum(5))

// - Write a function called `sum` that sum all the numbers until the given parameter
// - The function should return the result