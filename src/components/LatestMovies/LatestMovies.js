import React from 'react';
import { Link } from 'react-router-dom';

function LatestMovies({ movies, pagination, ratingColours, totalPages, currentPage }) {
  const url = "http://image.tmdb.org/t/p/w185/"
  const movieList = movies.length ?
    (movies.filter(item => item.poster_path !== null)
      .map(movie => {
        const { title, id, poster_path, overview, vote_average } = movie;
        return (
          <div className="movie-card" key={id}>
            <Link to={'/' + id} className="movie-poster__link">
              <img src={`${url}` + poster_path} alt="poster" className="movie-poster"></img>
            </Link>
            <p className="movie-title">{title}</p>
            <p className={`movie-rating ${ratingColours(vote_average)}`}>{vote_average}</p>
            <div className="movie-overview">
              <h2>Overview</h2>
              <p>{overview}</p>
            </div>
          </div>
        )
      }
      ))
    : ("no movies")
  return (
    <div className="movies-container">
      {movieList}
      <p className="page-index">Page {currentPage} of {totalPages}</p>
      <div className="movieList-pagination" onClick={pagination}>
        <button type="submit" id="prev">Prev Page</button>
        <button type="submit" id="next" >Next Page</button>
      </div>
    </div>
  )
}

export default LatestMovies;

