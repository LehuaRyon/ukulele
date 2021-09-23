const songFormDiv = document.getElementById("song-form-div")
// why is songForm & variables listed below = null when declared here:
// const songForm = document.getElementById("song-form")
// const songTitle = document.getElementById("input-title")
// const songArtist = document.getElementById("input-artist")
// const songImage = document.getElementById("input-image")
// const songChords = document.getElementById("input-chords")
// const songGenre = document.getElementById("input-genre")
const buttonDiv = document.getElementById("button-control")
const buttonShowGenres = document.getElementById("button-show-genres")
const ulListDiv = document.getElementById("list")
const ul = document.getElementById("genres-list")
const BASE_URL = "http://localhost:3000/"

document.addEventListener("DOMContentLoaded", () => {
    // showForm()
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
        <input id="input-image" type="text" name="image" value="" placeholder="Image URL..." class="input-text">
        <br><br>
        <label for="link">Ukulele Chords:</label>
        <input id="input-chords" type="text" name="link" value="" placeholder="Tab URL..." class="input-text">
        <br><br>
        <label for"genres">Choose a Genre:</label>
        <select id="input-genre" name="genres">
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
    // debugger
    // songFormDiv.firstElementChild.addEventListener("submit", (e) => handleSubmitSongForm(e))
    const songForm = document.getElementById("song-form")
    songForm.addEventListener("submit", (e) => handleSubmitSongForm(e))
}

function fetchGenres() {
    fetch(`${BASE_URL}/genres`)
    .then(resp => resp.json())
    .then(json => renderGenres(json))
    // .catch(handleError)
}

function renderGenres(genres) {
    ul.innerHTML += `<h1 id='genres-header'>Genres</h1>`
    genres.forEach(genre => renderGenre(genre));
}

function renderGenre(genre) {
    const h2 = document.createElement("h2")
    const a = document.createElement("a")
    a.id = `genre-${genre.id}`
    a.innerText = genre.name
    a.href = "#"
    a.addEventListener("click", (e) => renderSongs(e, genre))
    h2.appendChild(a)
    ul.appendChild(h2)
}

function renderSongs(e, genre) {
    const nextLiSibling = e.target.nextSibling
    if (nextLiSibling) {
        const children = Array.from(e.target.parentNode.children)
        const lis = children.slice(1)
        lis.forEach((li) => li.remove())
    } else {
        genre.songs.forEach(song => renderSong(song, genre.id));
    }
}

function renderSong(song, genreId) {
    const a = document.getElementById(`genre-${genreId}`)
    const li = document.createElement("li")
    a.dataset.genreId = genreId
    li.innerHTML += `
    <img class="card-img" src=${song.image} height="200" width="250">
    <br>
    <strong class="card-title">${song.title}</strong>
    <br>
    <span class="card-artist">${song.artist}</span>
    <br>
    <a class="card-link" href=${song.chords}>Ukulele Chords</a>
    <br>
    <button class="edit-button" data-id="${song.id}">Edit</button>
    <button class="delete-button" data-id="${song.id}">Delete</button>
    `
    a.parentNode.appendChild(li)
}

function handleSubmitSongForm(e) {
    e.preventDefault()
    const songTitle = document.getElementById("input-title")
    const songArtist = document.getElementById("input-artist")
    const songImage = document.getElementById("input-image")
    const songChords = document.getElementById("input-chords")
    const songGenre = document.getElementById("input-genre")
    // packaged data I need:
    const songObject = {
        title: songTitle.value,
        artist: songArtist.value,
        image: songImage.value,
        chords: songChords.value,
        genre_id: songGenre.value
    }
    // where to send data and how:
    // const configObj = {}
    fetch(`${BASE_URL}/songs`, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        // json class has method of stringify
        body: JSON.stringify(songObject)
    })
    .then(resp => resp.json())
    .then(json => handleCreateSong(json))
}

function handleCreateSong(song) {
    // genres on page first
    // prepare new song and append to page
    renderSong(song, song.genre.id)
}

// function handleError(error) {

// }