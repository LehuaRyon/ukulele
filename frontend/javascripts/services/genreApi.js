class GenreApi {
    static fetchGenres() {
        fetch(`${BASE_URL}/genres`)
        .then(resp => resp.json())
        .then(json => renderGenres(json))
        // .catch(handleError)
    }
}