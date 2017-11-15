'use strict'

var playlists = document.querySelector('.playlists')
var tracks = document.querySelector('.tracks')

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