import React from 'react';

const setVoteColor = (vote_average) => {
  if (vote_average > 8.5) return 'green';
  else if ((vote_average >= 5) && (vote_average <= 8.5)) return 'orange';
  else return 'red'
}

function LatestMovies(props) {
  const { movies, pagination } = props;
  const url = "http://image.tmdb.org/t/p/w185/"

  const movieList = movies.length ?
    (movies.filter(item => item.poster_path !== null)
      .map(movie => {

        const { title, id, poster_path, overview, vote_average } = movie;
        return (
          <div className="movie-card" key={id}>
            <img src={url + poster_path} alt="poster" className="movie-poster"></img>
            <p className="movie-title">{title}</p>
            <p className={`movie-rating ${setVoteColor(vote_average)}`}>{vote_average}</p>
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
      <div className="movieList-pagination" onClick={pagination}>
        <button type="submit" id="next" >Next Page</button>
        <button type="submit" id="prev">Prev Page</button>
      </div>
    </div>
  )
}

export default LatestMovies;

