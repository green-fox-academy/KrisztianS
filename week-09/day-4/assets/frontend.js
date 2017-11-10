'use strict'

var booklist = document.querySelector('.booklist')

function ajax(method, endpoint, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, endpoint);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            let resp = JSON.parse(xhr.responseText)
            callback(resp);
        }
    }
    xhr.send()
}

function renderBooks(res) {
    res.forEach(function(res){
        console.log(res)
        let bookname = document.createElement('li')
        bookname.innerHTML = res
        booklist.appendChild(bookname)
    })
}

ajax('GET', '/booktitles', renderBooks)