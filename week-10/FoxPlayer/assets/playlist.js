const Playlist = function() {

    function createDialog() {
        const playlist_add_icon = document.querySelector('.playlist_add_icon')
        playlist_add_icon.addEventListener('click', () => {
            let newPlaylist = window.prompt('Create new playlist:')
        })
    }
  
    createDialog()

    var playlists = document.querySelector('.playlists')
    var tracks = document.querySelector('.tracks')
    
    function renderLists(res) {
        res.forEach(function(res){
            let listname = document.createElement('div')
            listname.setAttribute("class", "playlist_element")
            listname.innerHTML = res.title
            playlists.appendChild(listname)
        })
    }

    function renderTracks(res) {
        res.forEach(function(res){
            let trackname = document.createElement('div')
            trackname.setAttribute("class", "track_element")
            trackname.innerHTML = res.title
            tracks.appendChild(trackname)
        })
    }
    
    ajax('GET', '/playlists', renderLists)
    ajax('GET', '/alltracks', renderTracks)
    
    return {
        createDialog
    }

}

Playlist_module = Playlist()
