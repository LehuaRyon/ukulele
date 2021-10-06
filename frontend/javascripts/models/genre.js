class Genre {
    static all = []

    constructor({name, id}){
        this.name = name
        this.id = id
        Genre.all.push(this)
    }

    static retrieveAll() {
        return this.all
    }

    static findByName(name) {
        return this.all.find(genre => genre.name === name)
    }

    static findById(id) {
        return this.all.find(genre => genre.id === id)
    }

    static findOrCreateBy(genre) {
        return this.findByName(genre.name) || new Genre(genre)
    }

    getSongs() {
        return Song.all.filter(song => this.id === song.genre_id)
    }

    renderGenre() {
        const h2 = document.createElement("h2")
        const a = document.createElement("a")
        a.id = `genre-${this.id}`
        a.innerText = this.name
        a.href = "javascript:void(0)"
        a.addEventListener("click", (e) => this.renderSongs(e))
        h2.appendChild(a)
        ul.appendChild(h2)
    }

    renderSongs(e) {
        const ifLisAfterA = e.target.nextSibling
        if (ifLisAfterA) {
            const aAndLis = Array.from(e.target.parentNode.children)
            const lis = aAndLis.slice(1)
            lis.forEach((li) => li.remove())
        } else {
            this.getSongs().forEach(song => song.renderSong());
        }
    }

}