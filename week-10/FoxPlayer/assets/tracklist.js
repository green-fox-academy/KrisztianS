const Tracklist = function() {

    function renderTracks(res) {
        res.forEach(function(res){
            let trackname = document.createElement('div')
            trackname.setAttribute("class", "track_element")
            trackname.innerHTML = res.title
            tracks.appendChild(trackname)
        })
    }

    ajax('GET', false, '/alltracks', renderTracks)
}

temp = Tracklist()