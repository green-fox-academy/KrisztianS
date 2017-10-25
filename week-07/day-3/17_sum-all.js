'use strict';

let ai = [3, 4, 5, 6, 7]

function summarize(inp) {
    var sum = 0
    for (var i = 0; i <= inp.length - 1; i++) {
        sum += inp[i]
    }
    return sum
}
console.log(summarize(ai))


// - Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// - Log the sum of the elements in `ai` to the console