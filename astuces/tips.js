function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&")
    let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url)
    if (!results) return null
    if (!results[2]) return ''
    return decodeURIComponent(results[2].replace(/\+/g, " "))
}

function getHTML(path) {
    data = ""
    var xhr = new XMLHttpRequest();
    xhr.open("GET", path, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4){
            data = xhr.responseText
            document.getElementById("content").innerHTML = data
        }
    }
    xhr.send();
}

var game_id = getParameterByName('game')
var game = games[game_id]
getHTML('games/' + game_id + '.html')

var header = document.getElementById('header')
var title = header.querySelector('h1')
title.textContent = game.name
header.style.backgroundImage = 'url(' + game.image + ')'
