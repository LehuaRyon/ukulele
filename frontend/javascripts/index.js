const songFormDiv = document.getElementById("song-form-div")
const songForm = document.getElementById("song-form")
const buttonDiv = document.getElementById("button-control")
const buttonShowGenres = document.getElementById("button-show-genres")
const ulListDiv = document.getElementById("list")
const ul = document.getElementById("genres-list")
const BASE_URL = "http://localhost:3000/"

document.addEventListener("DOMContentLoaded", () => {
    fetchGenres()
    showForm()
})

function showForm() {
    songFormDiv.innerHTML +=
    `
    <form id="song-form" style="">
        <h3>Add a Song to Learn:</h3>
        <label for="title">Title:</label>
        <input id="input-title" type="text" name="title" value="" placeholder="Song name..." class="input-text">
        <br><br>
        <label for="artist">Artist:</label>
        <input id="input-artist" type="text" name="artist" value="" placeholder="Artist name..." class="input-text">
        <br><br>
        <label for="image">Album Cover:</label>
        <input id="input-url" type="text" name="image" value="" placeholder="Image URL..." class="input-text">
        <br><br>
        <label for="link">Ukulele Chords:</label>
        <input id="link-url" type="text" name="link" value="" placeholder="Tab URL..." class="input-text">
        <br><br>
        <label for"genres">Choose a Genre:</label>
        <select id="genre_id" name="genres">
            <option value="" selected disabled hidden>Please Select</option>
            <option value="1">Pop</option>
            <option value="2">R&B</option>
            <option value="3">Indie</option>
            <option value="4">Hip Hop</option>
            <option value="5">Country</option>
            <option value="6">Rock</option>
            <option value="7">Alternative</option>
            <option value="8">Jazz</option>
            <option value="9">Latin</option>
            <option value="10">Reggae</option>
            <option value="11">Electronic</option>
            <option value="12">Religious</option>
            <option value="13">Metal</option>
            <option value="14">Folk</option>
            <option value="15">Soundtrack</option>
            <option value="16">World</option>
            <option value="17">Comedy</option>
            <option value="18">Blues</option>
            <option value="19">Disco</option>
            <option value="20">New Age</option>
        </select>
        <br><br>
        <input id="create-button" type="submit" value="Add Song" class="submit">
        <br><br>
    </form>
    `
    songForm.addEventListener("submit", handleSubmitSongForm)
}

function fetchGenres() {
    fetch(`${BASE_URL}/genres`)
    .then(resp => resp.json())
    .then(json => renderGenres(json))
    .catch(handleError)
}

function renderGenres(genres) {
    ul.innerHTML += `<h1 id='genres-header'>Genres</h1>`
    genres.forEach(genre => renderGenre(genre));
}

// function renderGenre(genre) {
//     let newGenre = new Genre(genre, genre.attributes)
//     // debugger
//     const ul = document.getElementById("genres-list")
//     const h4 = document.createElement("h4")
//     const a = document.createElement("a")
//     a.id = `${newGenre.id}`
//     a.innerText = newGenre.name
//     a.href = "#"
//     a.alt = `${newGenre.name}`
//     a.addEventListener("click", (e) => fetchSongs(e, newGenre))
//     h4.appendChild(a)
//     ul.appendChild(h4)
// }