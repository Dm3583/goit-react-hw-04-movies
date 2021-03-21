import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import filmsApi from '../../services/films-api';
import MoviesList from '../../components/MoviesList';

class HomePage extends Component {
  state = {
    trendingMovies: [],
  };

  async componentDidMount() {
    const trendingMovies = await filmsApi.fetchTrendingMovies();
    this.setState({ trendingMovies: trendingMovies.results });
    // console.log(this.state.trendingMovies);
  }

  render() {
    const { trendingMovies } = this.state;
    return (
      <div>
        <h1>Trending today</h1>
        <MoviesList films={trendingMovies} />
      </div>
    );
  }
}

export default HomePage;
