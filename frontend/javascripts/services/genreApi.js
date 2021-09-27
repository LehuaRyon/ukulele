class GenreApi {

    static baseUrl = `${BASE_URL}/genres`
    // responsible for retrieving data
    static fetchGenres() {
        fetch(this.baseUrl)
        .then(resp => resp.json())
        // .then(json => renderGenres(json)), json comes back an array, turn into javascript objects
        // .then(json => json.forEach(genre => new Genre(genre)))
        // .then(json => {debugger})

        // .then(json => json.forEach(genre => Genre.findOrCreateBy(genre)))
        // .then(() => Genre.renderGenres())

        // .then(json => json.forEach(genre => {
        //     Genre.findOrCreateBy(genre)
        //     Genre.renderGenre(genre)
        // }))

        .then(json => json.forEach(genre => {
            let genreObject = Genre.findOrCreateBy(genre)
            genreObject.renderGenre()
        }))
        // .catch(handleError)
        ul.innerHTML += `<h1 id='genres-header'>Genres</h1>`
    }

    // static handleError(error) {
    //     console.log(error)
    // }
}