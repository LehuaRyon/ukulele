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
            const song = new Song(json)
            song.renderSong()
            const songForm = document.getElementById("song-form")
            songForm.reset()
        })
    }

    static handleEditSong(e) {
        const li = e.target.parentNode
        // debugger
            let titleContent = li.querySelector(".card-title").textContent
            const titleValue = document.getElementById("input-title")
            titleValue.value = titleContent
        
            let artistContent = li.querySelector(".card-artist").textContent
            const artistValue = document.getElementById("input-artist")
            artistValue.value = artistContent
            // debugger
            let imageContent = li.querySelector(".card-image").src
            const imageValue = document.getElementById("input-image")
            imageValue.value = imageContent
            
            let chordsContent = li.querySelector(".card-chords").href
            const chordsValue = document.getElementById("input-chords")
            chordsValue.value = chordsContent
            // debugger
            let genreContent = e.target.parentNode.parentNode.firstElementChild.dataset.genreId
            const genreValue = document.getElementById("input-genre")
            genreValue.value = genreContent
            // debugger
            const songForm = document.getElementById("song-form")
            songForm.scrollIntoView();
            // window.scrollTo(0, 170)
    
            const songId = e.target.dataset.id
            const formButton = document.getElementById("create-button")
            formButton.addEventListener('click', (e) => {
                e.preventDefault()
                fetch(`${BASE_URL}/songs/${songId}`, {
                    method: "PATCH",
                    headers: {"Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: titleValue.value,
                    artist: artistValue.value,
                    image: imageValue.value,
                    chords: chordsValue.value,
                    genre_id: genreValue.value
                })
            })
                    .then(resp => resp.json())
                    .then(json => {
                        // debugger
                        const song = new Song(json)
                        song.renderSong()
                        const songForm = document.getElementById("song-form")
                        songForm.reset()
                    })
                    // .catch(error => alert(error))
                    // .then(() => location.reload(), )
                    // debugger
            })
            // debugger
            // const previousGenreOwnerId = parseInt(li.parentNode.firstElementChild.dataset.genreId)
            // const previousGenreOwner = Genre.findById(previousGenreOwnerId)
            // const a = li.parentNode.firstElementChild
            // li.remove()
            // a.addEventListener("click", (e) => previousGenreOwner.renderSongs(e))

            // deletes song from last genre location
            // defined above: const li = e.target.parentNode        
            // debugger
            li.remove()
            const song = Song.findById(parseInt(e.target.dataset.id))
            const songLocationInAll = Song.all.indexOf(song)
            Song.all.splice(songLocationInAll, 1)
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