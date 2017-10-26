let itemList = document.querySelector('ul.asteroids')

let newLi = document.createElement('li')
newLi.textContent = 'The Green Fox'
itemList.appendChild(newLi)

let lamplighterLi = document.createElement('li')
lamplighterLi.textContent = 'The Lamplighter'
itemList.appendChild(lamplighterLi)

let container = document.querySelector('div.container')

let newHeading = document.createElement('h1')
newHeading.textContent = 'I can add elements to the DOM!'
container.appendChild(newHeading)

let newImg = document.createElement('img')
newImg.src = 'https://www.w3schools.com/howto/img_fjords.jpg'
container.appendChild(newImg)