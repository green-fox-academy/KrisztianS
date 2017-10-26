let pList = document.getElementsByTagName('p')

for (i = 0; i < pList.length - 1; i++) {
    document.getElementsByTagName('p')[i].innerHTML = document.getElementsByTagName('p')[3].textContent
}
