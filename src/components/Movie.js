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
    const { id, poster_path, title } = this.state.singleMovie

    return (<div className="movies-container">
      <div className="movie-card__single">
        <img src={`${url}` + poster_path} alt="poster" className="movie-poster__single"></img>
        <p >This is the id: {id}</p>
        <p >This is the title: {title}</p>
      </div>
    </div>)
  }
}

export default Movie;


