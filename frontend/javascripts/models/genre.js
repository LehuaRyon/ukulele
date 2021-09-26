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
    static retrieveAll() {
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

    // static renderGenres(genres) {
    static renderGenres() {
        ul.innerHTML += `<h1 id='genres-header'>Genres</h1>`
        // debugger
        this.all.forEach(genre => this.renderGenre(genre));
        // dont forget the reciever of the function, Genre
    }

    static renderGenre(genre) {
        // debugger
        const h2 = document.createElement("h2")
        const a = document.createElement("a")
        a.id = `genre-${genre.id}`
        a.innerText = genre.name
        // a.href = "#"
        a.href = "javascript:void(0)"
        // instead of #, this way the page does not scroll to top when genre is clicked
        a.addEventListener("click", (e) => renderSongs(e, genre))
        h2.appendChild(a)
        ul.appendChild(h2)
    }

    // for each genre, render the songs = instance
    renderSongs(genre) {
        return genre
    }
}