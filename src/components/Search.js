import React, { Component } from 'react';

const setVoteColor = (vote_average) => {
  if (vote_average >= 8.4) return 'green';
  else if ((vote_average >= 5) && (vote_average <= 8)) return 'orange';
  else return 'red'
}

class Search extends Component {
  state = {
    searched: '',
    movieList: []
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.searchedMovies(this.state)
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  searchedMovies = () => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=96fc446ecb31737673fc835496bd6ead&query=${this.state.searched}`)
      .then(response => response.json())
      .then(data => this.setState({ movieList: data.results }))
      .catch(error => console.log(error))
  }

  render() {
    const url = "http://image.tmdb.org/t/p/w185/"
    const movieList = this.state.movieList.map(movie => {
      return (
        <div key={movie.id} className="movie-card">
          <img src={url + movie.poster_path} alt="poster" className="movie-poster"></img>
          <p className="movie-title">{movie.title}</p>
          <p className={`movie-rating ${setVoteColor(movie.vote_average)}`}>{movie.vote_average}</p>
          <div className="movie-overview">
            <h2>Overview</h2>
            <p>{movie.overview}</p></div>
        </div>
      )
    })
    return (
      <div className="movies-container">
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Search movie" name="searched" onChange={this.handleChange}></input>
          <button>Search Movie</button>
        </form>
        {movieList}
      </div>
    )
  }
}

export default Search;