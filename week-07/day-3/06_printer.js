'use strict';

function printer(...args) {
    console.log(args)
}

printer('item', 1, 'hello')

// - Create a function called `printer`
//   which logs to the console the input parameters
//   (can have multiple number of arguments)