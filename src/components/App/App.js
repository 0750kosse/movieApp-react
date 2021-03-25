import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LatestMovies from '../LatestMovies/LatestMovies';
import Search from '../Search/Search';
import Header from '../Header/Header';
import Movie from '../Movie/Movie'
import './App.css';

let currentPage = 1;

class App extends Component {
  state = {
    movies: [],
    searched: '',
    totalPages: '',
    currentPage: 1,
    movieList: [],
    singleMovie: null,
  }

  setVoteColor = (vote_average) => {
    if (vote_average > 8.5) return 'green';
    else if ((vote_average >= 5) && (vote_average <= 8.5)) return 'orange';
    else return 'red'
  }

  pageUp = () => {
    currentPage = currentPage + 1
  }

  pageDown = () => {
    currentPage > 1 ?
      currentPage-- :
      currentPage = 1
  }

  switchPages = (e) => {
    e.preventDefault();
    e.target.id === 'next' ?
      this.pageUp() :
      this.pageDown()
    this.setState({ currentPage: currentPage })
    this.getLatestMovies(currentPage)
    this.scroll()
  }

  scroll() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  getLatestMovies() {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=96fc446ecb31737673fc835496bd6ead&page=${currentPage}&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=true&vote_count.gte=300`)
      .then(res => res.json())
      .then(data => this.setState({ movies: data.results, totalPages: data.total_pages }))
  }

  searchedMovies = () => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=96fc446ecb31737673fc835496bd6ead&query=${this.state.searched}`)
      .then(response => response.json())
      .then(data => this.setState({ movieList: data.results }))
      .catch(error => console.log(error))
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

  componentDidMount() {
    this.getLatestMovies()
  }

  render() {
    return (
      <div className="App" >
        <BrowserRouter>
          <Header
            title="NETFAILX"
            subtitle="Click for the latest movies or search by name..."
          />
          <Navbar />
          <Switch>
            <Route path="/latest" render={() =>
              <LatestMovies
                movies={this.state.movies}
                totalPages={this.state.totalPages}
                currentPage={this.state.currentPage}
                pagination={this.switchPages}
                ratingColours={this.setVoteColor} />} />
            <Route path="/search" render={() =>
              <Search
                moviesSearch={this.state.movieList}
                singleMovie={this.state.singleMovie}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                ratingColours={this.setVoteColor}
              />} />
            <Route path="/:movie_id"
              component={Movie}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
