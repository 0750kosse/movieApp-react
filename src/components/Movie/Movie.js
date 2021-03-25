import React, { Component } from 'react'

const url = "http://image.tmdb.org/t/p/w185/"

class Movie extends Component {
  state = {
    singleMovie: {}
  }

  componentDidMount() {
    let id = this.props.match.params.movie_id;
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=96fc446ecb31737673fc835496bd6ead&language=en-US&include_adult=false`)
      .then(res => res.json())
      .then(data => this.setState({ singleMovie: data }))
  }
  render() {
    const { id, poster_path, overview, title, vote_average, release_date, runtime } = this.state.singleMovie
    return (
      <div className="movies-container">
        <div className="movie-card__single" key={id}>
          <h2>{title}</h2>
          <img src={`${url}` + poster_path} alt="poster" className="movie-poster__single"></img>
          <div className="movie-details">
            <p>Overview: {overview}</p>
            <p>Runtime: {runtime} min</p>
            <p>Rating: {vote_average}</p>
            <p>Year: {release_date}</p>
          </div>
        </div>
      </div>
    )
  }
}


export default Movie;


