let replaceList = ['apple', 'banana', 'cat', 'dog']

for (let i = 0; i < replaceList.length; i++) {
    document.getElementsByTagName('li')[i].textContent = replaceList[i]
}

document.getElementsByTagName('ul')[0].style.backgroundColor = 'limegreen'