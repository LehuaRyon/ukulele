class SongApi {

    static baseUrl = `${BASE_URL}/songs`

    static fetchSongs() {
        fetch(this.baseUrl)
        .then(resp => resp.json())
        .then(json => json.forEach(song => {
            Song.findOrCreateBy(song)
        }))
    }

    static handleSubmitSongForm(e) {
        e.preventDefault()
        const songTitle = document.getElementById("input-title")
        const songArtist = document.getElementById("input-artist")
        const songImage = document.getElementById("input-image")
        const songChords = document.getElementById("input-chords")
        const songGenre = document.getElementById("input-genre")
        const songObject = {
            title: songTitle.value,
            artist: songArtist.value,
            image: songImage.value,
            chords: songChords.value,
            genre_id: songGenre.value
        }
        fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(songObject)
        })
        .then(resp => resp.json())
        .then(json => {
            if (json.message){
                alert(json.message)
            } else {
                const song = new Song(json)
                song.renderSong()
                const songForm = document.getElementById("song-form")
                songForm.reset()
            }
        })
    }

    static handleEditSong(e) {
        const li = e.target.parentNode
       
            let titleContent = li.querySelector(".card-title").textContent
            const titleValue = document.getElementById("input-title")
            titleValue.value = titleContent
        
            let artistContent = li.querySelector(".card-artist").textContent
            const artistValue = document.getElementById("input-artist")
            artistValue.value = artistContent
            
            let imageContent = li.querySelector(".card-image").src
            const imageValue = document.getElementById("input-image")
            imageValue.value = imageContent
            
            let chordsContent = li.querySelector(".card-chords").href
            const chordsValue = document.getElementById("input-chords")
            chordsValue.value = chordsContent
            
            let genreContent = e.target.parentNode.parentNode.firstElementChild.dataset.genreId
            const genreValue = document.getElementById("input-genre")
            genreValue.value = genreContent
            
            const songForm = document.getElementById("song-form")
            songForm.scrollIntoView();
    
            const songId = e.target.dataset.id
            const formButton = document.getElementById("update-button")
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
                        const song = new Song(json)
                        song.renderSong()
                        const songForm = document.getElementById("song-form")
                        songForm.reset()
                    })
            })
            li.remove()
            const song = Song.findById(parseInt(e.target.dataset.id))
            const songLocationInAll = Song.all.indexOf(song)
            Song.all.splice(songLocationInAll, 1)
    }

    static handleDeleteSong(e) {
        const songId = parseInt(e.target.dataset.id)
        fetch(`${this.baseUrl}/${songId}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(json => {
            e.target.parentNode.remove()
            const song = Song.findById(parseInt(e.target.dataset.id))
            const songLocationInAll = Song.all.indexOf(song)
            Song.all.splice(songLocationInAll, 1)
            alert(json.message)
        })
    }

}