const API_KEY = '710362b0'; // Your OMDb API key
const searchBtn = document.getElementById('searchBtn');
const movieContainer = document.getElementById('movieContainer');

searchBtn.addEventListener('click', async () => {
  const movieName = document.getElementById('movieInput').value.trim();

  if (movieName === "") {
    alert("Please enter a movie name!");
    return;
  }

  try {
    const response = await fetch(`https://www.omdbapi.com/?s=${movieName}&apikey=${API_KEY}`);
    const data = await response.json();

    if (data.Response === "True") {
      movieContainer.innerHTML = data.Search
        .map(movie => `
          <div class="movie-card">
            <img src="${movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}" alt="${movie.Title} poster" />
            <h4>${movie.Title}</h4>
            <p>${movie.Year}</p>
          </div>
        `)
        .join('');
    } else {
      movieContainer.innerHTML = `<p>❌ No movies found.</p>`;
    }
  } catch (error) {
    movieContainer.innerHTML = `<p>⚠️ Error fetching data.</p>`;
    console.error(error);
  }
});
