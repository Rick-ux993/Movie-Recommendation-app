const API_KEY = "1ac568bb64d8856d31b4c7238646c59e";
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p/w500";

const moodMap = {
  happy: "35,10751",
  sad: "18",
  romantic: "10749",
  excited: "28,12",
  scared: "27"
};

async function getMovies(mood) {
  const genre = moodMap[mood];
  const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genre}`;

  const res = await fetch(url);
  const data = await res.json();

  displayMovies(data.results);
}

function displayMovies(movies) {
  const moviesContainer = document.getElementById("movies");
  moviesContainer.innerHTML = "";

  movies.forEach(movie => {
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");

    movieEl.innerHTML = `
      <img src="${IMG_URL + movie.poster_path}" alt="${movie.title}">
      <h3>${movie.title}</h3>
      <p class="rating">⭐ ${movie.vote_average}</p>
      <p>${movie.overview.substring(0, 100)}...</p>
    `;

    moviesContainer.appendChild(movieEl);
  });
}