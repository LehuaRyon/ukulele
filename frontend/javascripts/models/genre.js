class Genre {
    static all = []

    constructor({name, id, songs = []}){
        this.name = name,
        this.id = id,
        this.songs = songs
        Genre.all.push(this)
    }
}