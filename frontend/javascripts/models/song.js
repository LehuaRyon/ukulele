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
        editButton.addEventListener("click", (e) => handleEditSong(e))
        // add the song
    }

}