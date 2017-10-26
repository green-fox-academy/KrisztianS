alert(document.getElementsByTagName('h1')[0].textContent)

console.log(document.getElementsByTagName('p')[0].textContent)

alert(document.getElementsByTagName('p')[1].textContent)

document.getElementsByTagName('h1')[0].textContent = 'New content'

let contentP1 = document.getElementsByTagName('p')[0].textContent
let contentP2 = document.getElementsByTagName('p')[2].textContent

document.getElementsByTagName('p')[0].innerHTML = contentP2
document.getElementsByTagName('p')[2].innerHTML = contentP1