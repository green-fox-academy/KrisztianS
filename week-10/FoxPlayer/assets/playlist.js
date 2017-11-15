const Playlist = function() {

    function createDialog() {
        const playlist_add_icon = document.querySelector('.playlist_add_icon')
        playlist_add_icon.addEventListener('click', () => {
            let newPlaylist = window.prompt('Create new playlist:')
            if (newPlaylist != null) {
                let data = {'title': newPlaylist}
                ajax('POST', data, '/addplaylist', load)
            }
        })
    }
  
    createDialog()

    var appendable_list_div = document.querySelector('.appendable_list_div')
    var tracks = document.querySelector('.tracks')
    
    function renderLists(res) {
        appendable_list_div.innerHTML = ''
        res.forEach(function(res){
            let listname = document.createElement('div')
            listname.setAttribute("class", "playlist_element")
            listname.innerHTML = res.title
            appendable_list_div.appendChild(listname)
        })
    }

    function load() {
        
        GetPlaylist(renderLists)
    }

    load()
    
    return {
        createDialog
    }
}

Playlist_module = Playlist()
