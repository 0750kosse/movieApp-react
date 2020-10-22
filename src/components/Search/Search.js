import React from 'react';

function Search({ moviesSearch, handleChange, handleSubmit, ratingColours }) {
  const url = "http://image.tmdb.org/t/p/w185/"
  const movieList = moviesSearch.map(movie => {
    const { id, poster_path, title, vote_average, overview } = movie
    return (
      <div key={id} className="movie-card">
        <img src={url + poster_path} alt="poster" className="movie-poster"></img>
        <p className="movie-title">{title}</p>
        <p className={`movie-rating ${ratingColours(vote_average)}`}>{vote_average}</p>
        <div className="movie-overview">
          <h2>Overview</h2>
          <p>{overview}</p></div>
      </div>
    )
  })
  return (
    <div className="search-container">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Search movie" name="searched" onChange={handleChange}></input>
        </form>
      </div>
      <div className="movies-container">
        {movieList}
      </div>
    </div>
  )
}

export default Search;