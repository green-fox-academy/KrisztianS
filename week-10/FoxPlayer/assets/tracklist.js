const Tracklist = function() {

    function renderTracks(res) {
        function countDuration(resduration) {
            let minutes = Math.floor(resduration / 60)
            let seconds = resduration - minutes * 60;
            if (Math.floor(seconds) < 10) {
                seconds = "0" + seconds
            } else seconds = Math.floor(seconds)
            return minutes + ':' + seconds
        }

        let i = 1;

        res.forEach(function(res){
            let trackname = document.createElement('div')
            trackname.setAttribute("class", "track_element")
            trackname.innerHTML = i + '<span class="tracktitle">' + res.title + '</span>' + '<span class="durationspan">' + countDuration(res.duration) + '</span>'
            tracks.appendChild(trackname)
            i++
        })
    }

    ajax('GET', false, '/alltracks', renderTracks)
}

temp = Tracklist()