'use strict';

var lineCount = 7;

let space = ' '
let star = '*'

for (let i = 1; i <= lineCount * 2; i+=2) {
    if (i<= lineCount) {
    console.log(space.repeat((lineCount - i)/2) + star.repeat(i) + space.repeat((lineCount - i)/2))
    } else if (i > lineCount) 











// Write a program that draws a
// diamond like this:
//
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is