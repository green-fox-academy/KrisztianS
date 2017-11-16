const Playlist = function() {

    function createDialog() {
        const playlist_add_icon = document.querySelector('.playlist_add_icon')
        playlist_add_icon.addEventListener('click', () => {
            let newPlaylist = window.prompt('Create new playlist:')
            if (newPlaylist != "") {
                let data = {'title': newPlaylist}
                ajax('POST', data, '/addplaylist', load)
            }
        })
    }
  
    createDialog()

    var appendable_list_div = document.querySelector('.appendable_list_div')
    var tracks = document.querySelector('.tracks')
    
    function renderLists(res) {
        appendable_list_div.innerHTML = '<div class="playlist_element">All tracks</div>'
        
        function isSystemList(id, systemnum) {
            let del_icon = '<span id="' + id + '" class="playlist_del_icon">' +'<img src="../assets/delete_icon.svg">' + '</span>'
            if (systemnum == '0') {
                return del_icon
            } else return ""
        }

        res.forEach(function(res){
            let listname = document.createElement('div')
            listname.setAttribute("class", "playlist_element")
            listname.setAttribute("id", res.id)
            listname.innerHTML = res.title + isSystemList(res.id, res.system)          
            appendable_list_div.appendChild(listname)
            
        })
        delete_buttons = appendable_list_div.querySelectorAll('span')
        delete_buttons.forEach(function(button){
            button.addEventListener('click', function() {
                ajax('DELETE', {}, '/delplaylist/' + this.id, () => {
                    this.parentNode.remove()
                })
            })
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
