'use strict';

// Handle the exceptions in the addString() function. It should check the type of the
// arguments, throw the right error and write it to the console.
// It should add the strings too if the arguments are appropriate.

let  addString = function(str1, str2, printStr){
    if (typeof(str1) != 'string' || typeof(str2) != 'string') {
        throw TypeError("baszki")
    } else {
     var newStr = str1 + str2
    printStr(newStr)
    }
}

var printStr = function(str) {
  console.log(str)
}


try{
    addString('fdf', 'dfdfd', printStr)
} catch(e){
    console.log(e.message)
}
