'use strict'

var playlists = document.querySelector('.playlists')

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

function renderLists(res) {
    res.forEach(function(res){
        console.log(res)
        let listname = document.createElement('div')
        listname.setAttribute("class", "playlist_element")
        listname.innerHTML = res.name
        playlists.appendChild(listname)
    })
}

ajax('GET', '/playlists', renderLists)