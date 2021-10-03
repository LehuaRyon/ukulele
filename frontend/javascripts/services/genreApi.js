class GenreApi {

    static baseUrl = `${BASE_URL}/genres`
   
    static fetchGenres() {
        fetch(this.baseUrl)
        .then(resp => resp.json())
        .then(json => json.forEach(genre => {
            let genreObject = Genre.findOrCreateBy(genre)
            genreObject.renderGenre()
        }))
        ul.innerHTML += `<h1 id='genres-header'>Genres</h1>`
    }
    
}