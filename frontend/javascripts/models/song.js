class Song {
    static all = []

    constructor({title, artist, image, chords, genre, id}){
        // destructure arguments
        this.title = title
        this.artist = artist
        this.image = image
        this.chords = chords
        this.genre_id = genre.id
        this.id = id
        Song.all.push(this)
    }

    static retrieveAll() {
        return this.all
    }

    static findByName(title) {
        // this.all.find(function(song) {song.title === title})
        return this.all.find(song => song.title === title)
    }

    static findById(id) {
        // this.all.find(function(song) {song.id === id})
        return this.all.find(song => song.id === id)
    }

    static findOrCreateBy(song) {
        return this.findByName(song.name) || new Song(song)
    }

    renderSong() {
        // find genre where new song needs to be added
        let genreA = document.getElementById(`genre-${this.genre_id}`)
        // make structure for Song
        const li = document.createElement("li")
        genreA.dataset.genreId = this.genre_id
        li.innerHTML = `
        <img class="card-image" src=${this.image} height="200" width="250">
        <br>
        <strong class="card-title">${this.title}</strong>
        <br>
        <span class="card-artist">${this.artist}</span>
        <br>
        <a class="card-chords" href=${this.chords}>Ukulele Chords</a>
        <br>
        <button class="edit-button" data-id="${this.id}">Edit</button>
        <button class="delete-button" data-id="${this.id}">Delete</button>
        <br><br>
        `
        genreA.parentNode.appendChild(li)
        // advantage of dataset attributes are quick way to set important info on elements
        const deleteButton = document.querySelector(`button.delete-button[data-id='${this.id}']`)
        deleteButton.addEventListener("click", (e) => SongApi.handleDeleteSong(e))

        const editButton = document.querySelector(`button.edit-button[data-id='${this.id}']`)
        editButton.addEventListener("click", (e) => SongApi.handleEditSong(e))
        // add the song
    }

    static showForm() {
        songFormDiv.innerHTML +=
        `
        <form id="song-form" style="">
            <h3>Add a Song to the Queue:</h3>
            <div class="form-group">
                <label for="title">Title:</label>
                <input class="form-control" id="input-title" type="text" name="title" value="" placeholder="Song name..." class="input-text">
            </div>
            <div class="form-group">
                <label for="artist">Artist:</label>
                <input class="form-control" id="input-artist" type="text" name="artist" value="" placeholder="Artist name..." class="input-text">
            </div>
            <div class="form-group">
                <label for="image">Album Cover:</label>
                <input class="form-control" id="input-image" type="text" name="image" value="" placeholder="Image URL..." class="input-text">
            </div>
            <div class="form-group">
                <label for="link">Ukulele Chords:</label>
                <input class="form-control" id="input-chords" type="text" name="link" value="" placeholder="Tab URL..." class="input-text">
            </div>
            <div class="form-group">
                <label for"genres">Choose a Genre:</label>
                <select class="form-control" id="input-genre" name="genres">
                    <option value="" selected disabled hidden>Please Select</option>
                    <option value="1">Pop</option>
                    <option value="2">R&B</option>
                    <option value="3">Indie</option>
                    <option value="4">Hip Hop</option>
                    <option value="5">Country</option>
                    <option value="6">Rock</option>
                    <option value="7">Alternative</option>
                    <option value="8">Jazz</option>
                    <option value="9">Latin</option>
                    <option value="10">Reggae</option>
                    <option value="11">Electronic</option>
                    <option value="12">Religious</option>
                    <option value="13">Metal</option>
                    <option value="14">Folk</option>
                    <option value="15">Soundtrack</option>
                    <option value="16">World</option>
                    <option value="17">Comedy</option>
                    <option value="18">Blues</option>
                    <option value="19">Disco</option>
                    <option value="20">New Age</option>
                </select>
            </div>
            <button id="create-button" type="submit" class="btn btn-primary">Submit Song</button>
        </form>
        `

        // debugger
        // songFormDiv.firstElementChild.addEventListener("submit", (e) => handleSubmitSongForm(e))
        const songForm = document.getElementById("song-form")
        songForm.addEventListener("submit", (e) => SongApi.handleSubmitSongForm(e))
    }
}