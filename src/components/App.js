import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import LatestMovies from '../components/LatestMovies';
import Search from '../components/Search';
import Header from '../components/Header';
import './App.css';

let currentPage = 1;

class App extends Component {
  state = {
    movies: []
  }

  switchPages = (e) => {
    e.preventDefault();
    e.target.id === 'next' ?
      (currentPage = currentPage + 1) :
      (currentPage = currentPage - 1)
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
      .then(data => this.setState({ movies: data.results }))
  }

  componentDidMount() {
    this.getLatestMovies()
  }
  render() {
    return (
      <div className="App" >
        <BrowserRouter>
          <Header title="NETFAILX" />
          <Navbar />
          <Route path="/latest" render={() =>
            <LatestMovies
              movies={this.state.movies}
              pagination={this.switchPages} />} />
          <Route path="/search"
            component={Search} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
