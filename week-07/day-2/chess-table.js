// Crate a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % % 
//  % % % %
//
let percent = '% '
let row = percent.repeat(4)

for (let i = 1; i <= 8; i++) {
    if (i % 2 !== 0) {
    console.log(row)
    } else console.log(' ' + row)
}