const apiKey = "key"
const searchButton = document.getElementById('search-btn')
const searchInput = document.getElementById('search-input')
const movieContainer = document.getElementById('movie-container')

searchButton.addEventListener('click',() => {
    const query = searchInput.ariaValueMax.trim();
    if(query)
    {
        searchMovies(query)
    }
})

async function searchMovies(query)
{
    const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${apiKey}`)
    const data = await response.json()

    movieContainer.innerHTML=''

    if(data.Response == 'True')
        {
            data.Search.array.forEach(movie => {
                const movieElement = document.createElement('div')
                movieElement.classList.add('movie')

                movieElement.innerHTML = `
                <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/100x150'}" alt="${movie.Title}">
                <h3>${movie.Title}</h3>
                <p>Year: ${movie.Year}</p>
                `
                movieContainer.appendChild(movieElement)
            });
        }
        else
        movieContainer.innerHTML = "<p>No movies found. Try another search. </p> "
}