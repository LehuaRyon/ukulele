class SongApi {

    static baseUrl = `${BASE_URL}/songs`
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
        .then(json => handleCreateSong(json))
    }
}