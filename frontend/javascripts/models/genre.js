class Genre {
    static all = []

    constructor({name, id, songs = []}){
        // destructure arguments
        this.name = name
        this.id = id
        // this.songs = songs
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
        // this.all.find(function(genre) {genre.id === id})
        return this.all.find(genre => genre.id === id)
    }

    static findOrCreateBy(genre) {
        return this.findByName(genre.name) || new Genre(genre)
    }

    // cannot be class method, static, bc it would not now which genre referring to
    // has to be instance, call it on one genre
    getSongs() {
        // this is genre method is invoked on
        return Song.all.filter(song => this.id === song.genre_id)
    }

    renderGenre() {
        // debugger
        const h2 = document.createElement("h2")
        const a = document.createElement("a")
        a.id = `genre-${this.id}`
        a.innerText = this.name
        // a.href = "#"
        a.href = "javascript:void(0)"
        // instead of #, this way the page does not scroll to top when genre is clicked
        a.addEventListener("click", (e) => this.renderSongs(e))
        h2.appendChild(a)
        ul.appendChild(h2)
    }

    // for each genre, render the songs = instance
    renderSongs(e) {
        const nextLiSibling = e.target.nextSibling
        if (nextLiSibling) {
            // logic for toggling
            const children = Array.from(e.target.parentNode.children)
            const lis = children.slice(1)
            lis.forEach((li) => li.remove())
        } else {
            this.getSongs().forEach(song => song.renderSong());
        }
    }
}