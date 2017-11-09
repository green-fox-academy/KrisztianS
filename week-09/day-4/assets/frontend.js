'use strict'
var booklist = document.querySelector('.booklist')
function ajax(callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8080/booktitles');
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            let resp = JSON.parse(xhr.responseText)
            callback(resp);
        }
    }
    xhr.send()
}

function renderBooks(resp) {
    resp.forEach(function(resp){
        console.log(resp)
        let bname = document.createElement('tr')
        bname.innerHTML = resp
        booklist.appendChild(bname)

    })
}

ajax(renderBooks)