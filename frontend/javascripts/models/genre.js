class Genre {
    static all = []

    constructor({name, id, songs = []}){
        // destructure arguments
        this.name = name
        this.id = id
        this.songs = songs
        Genre.all.push(this)
    }

    // class method
    static retrieveAll {
        return this.all
    }

    static findByName(name) {
        // this.all.find(function(genre) {genre.name === name})
        return this.all.find(genre => genre.name === name)
    }

    static findById(id) {
        // this.all.find(function(genre) {genre.name === name})
        return this.all.find(id => genre.id === id)
    }

    static findOrCreateBy(genre) {
        return this.findByName(genre.name) || new Genre(genre)
    }

    static renderGenres() {
        
    }
}