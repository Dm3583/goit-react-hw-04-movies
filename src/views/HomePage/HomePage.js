import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import filmsApi from '../../services/films-api';
import FilmsList from '../../components/FilmsList';

class HomePage extends Component {
  state = {
    trendingMovies: [],
  };

  async componentDidMount() {
    const trendingMovies = await filmsApi.fetchTrendingMovies();
    console.log(trendingMovies);
    this.setState({ trendingMovies: trendingMovies.results });
    console.log(this.state.trendingMovies);
  }

  render() {
    const { trendingMovies } = this.state;
    return (
      <div>
        <h1>This is home page</h1>
        <FilmsList films={trendingMovies} />
      </div>
    );
  }
}

export default HomePage;
