import React from 'react';

function Search({ moviesSearch, handleChange, handleSubmit, ratingColours }) {
  const url = "http://image.tmdb.org/t/p/w185/"
  const movieList = moviesSearch.map(movie => {
    return (
      <div key={movie.id} className="movie-card">
        <img src={url + movie.poster_path} alt="poster" className="movie-poster"></img>
        <p className="movie-title">{movie.title}</p>
        <p className={`movie-rating ${ratingColours(movie.vote_average)}`}>{movie.vote_average}</p>
        <div className="movie-overview">
          <h2>Overview</h2>
          <p>{movie.overview}</p></div>
      </div>
    )
  })
  return (
    <div className="movies-container">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search movie" name="searched" onChange={handleChange}></input>
        <button>Search Movie</button>
      </form>
      {movieList}
    </div>
  )
}


export default Search;