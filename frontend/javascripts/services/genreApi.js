class GenreApi {
    // responsible for retrieving data
    static fetchGenres() {
        fetch(`${BASE_URL}/genres`)
        .then(resp => resp.json())
        // .then(json => renderGenres(json)), json comes back an array, turn into javascript objects
        // .then(json => json.forEach(genre => new Genre(genre)))
        // .then(json => {debugger})
        .then(json => json.forEach(genre => Genre.findOrCreateBy(genre)))
        // .catch(handleError)
        // Genre.renderGenres()
    }

    // static handleError(error) {
    //     console.log(error)
    // }
}