class SongApi {

    static baseUrl = `${BASE_URL}/songs`

    static fetchSongs() {
        fetch(this.baseUrl)
        .then(resp => resp.json())
        .then(json => json.forEach(song => {
            Song.findOrCreateBy(song)
            // let songObject = Song.findOrCreateBy(song)
            // songObject.renderSong()
        }))
        // .catch(this.handleError)
    }

    static handleError(error) {
        alert(error)
    }

    // static, invoke on class, instance, new SongApi
    static handleSubmitSongForm(e) {
        e.preventDefault()
        const songTitle = document.getElementById("input-title")
        const songArtist = document.getElementById("input-artist")
        const songImage = document.getElementById("input-image")
        const songChords = document.getElementById("input-chords")
        const songGenre = document.getElementById("input-genre")
        // packaged data I need:
        const songObject = {
            title: songTitle.value,
            artist: songArtist.value,
            image: songImage.value,
            chords: songChords.value,
            genre_id: songGenre.value
        }
        // where to send data and how:
        // const configObj = {}
        fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            // json class has method of stringify
            body: JSON.stringify(songObject)
        })
        .then(resp => resp.json())
        // .then(json => handleCreateSong(json))
        .then(json => {
            const product = new Product(json)
            product.renderSong()
        })
    }

    static handleDeleteSong(e) {
        // debugger
        const songId = parseInt(e.target.dataset.id)
        // debugger
        fetch(`${this.baseUrl}/${songId}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(json => {
            // pessemistic - check to see if request worked before doing something on page
            // optomistic - first do it, then make sure page works
            e.target.parentNode.remove()
            // it deletes it, however, when  toggle off and on again still shows it
            // debugger
            const song = Song.findById(parseInt(e.target.dataset.id))
            const songLocationInAll = Song.all.indexOf(song)
            // remove the song from collection of all
            // splice(start, deleteCount, item) - modifies content of Array
            Song.all.splice(songLocationInAll, 1)
            alert(json.message)
            // window.location.reload()
        })
        // .catch(this.handleError)
    }
}