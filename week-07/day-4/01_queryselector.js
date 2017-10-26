'use strict'

let king = document.getElementById('b325')
console.log(king)

let conceited = document.querySelector('.b326')
alert(conceited.textContent)

let businessLamp = document.getElementsByClassName('big')
console.log(businessLamp)

let asteroids = document.querySelectorAll('.asteroid')
let first = asteroids[0].textContent
let second = asteroids[1].textContent
let conceitedKing = [first , second]
alert(conceitedKing[0])
alert(conceitedKing[1])

let noBusiness = document.getElementsByTagName('div')
console.log(noBusiness)

let allBizniss = document.getElementsByTagName('p')
console.log(allBizniss)
alert(allBizniss[0].textContent)