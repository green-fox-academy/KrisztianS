'use strict'

var config = 'https://cors-anywhere.herokuapp.com/http://secure-reddit.herokuapp.com/posts'
var articles_div = document.querySelector('.articles')

function doRequest(callback) {
    var x = new XMLHttpRequest();
    x.open('GET', config);
    x.onload = function() {
        callback(JSON.parse(x.responseText))
    };
    x.send();
  }

  function handleData(data){
    console.log(data);
    data.posts.forEach(function(article) {
        let single_article = document.createElement('a')
        let url = article.url
        single_article.href = url
        single_article.innerHTML = "dads"
        articles_div.appendChild(single_article)
    })
  }

  doRequest(handleData)