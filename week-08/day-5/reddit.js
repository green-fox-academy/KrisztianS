'use strict'

var config = 'https://cors-anywhere.herokuapp.com/http://secure-reddit.herokuapp.com/posts'

function doRequest(callback) {
    var x = new XMLHttpRequest();
    x.open('GET', config);
    x.onload = function() {
        callback(x.responseText)
    };
    x.send();
  }

  function handleData(data){
    console.log(data);
  }

  doRequest(handleData)