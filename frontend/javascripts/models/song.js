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



}