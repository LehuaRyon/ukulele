const songFormDiv = document.getElementById("song-form")
const buttonDiv = document.getElementById("button-control")
const buttonShowGenres = document.getElementById("button-show-genres")
const ulListDiv = document.getElementById("list")
const ul = document.getElementById("genres-list")

document.addEventListener("DOMContentLoaded", () => {
    buttonShowGenres.addEventListener("click", fetchGenres)
    showForm()
})

function showForm() {
    
}