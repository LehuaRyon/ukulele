document.addEventListener("DOMContentLoaded", () => {
    GenreApi.fetchGenres()
    SongApi.fetchSongs()
    Song.showForm()
})


