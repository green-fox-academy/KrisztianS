'use strict'

var playlists = document.querySelector('.playlists')
var tracks = document.querySelector('.tracks')

function ajax(method, data, endpoint, callback) {
    let xhr = new XMLHttpRequest();
    data = data ? data : null;
    xhr.open(method, endpoint);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            let resp = JSON.parse(xhr.responseText)
            callback(resp);
        }
    }
    xhr.send(JSON.stringify(data))
}

const GetPlaylist = function(callback) {
    ajax('GET', false, '/playlists', callback)
}