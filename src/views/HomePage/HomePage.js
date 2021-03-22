import React, { Component } from 'react';
import filmsApi from '../../services/films-api';
import MoviesList from '../../components/MoviesList';
import ErrorMessage from '../../components/ErrorMessage';

class HomePage extends Component {
  state = {
    trendingMovies: [],
    error: null,
  };

  async componentDidMount() {
    try {
      const trendingMovies = await filmsApi.fetchTrendingMovies();
      this.setState({ trendingMovies: trendingMovies.results });
      // console.log(this.state.trendingMovies);
    } catch (error) {
      this.setState({ error });
    }
  }

  render() {
    const { trendingMovies, error } = this.state;
    return (
      <>
        {error ? (
          <ErrorMessage />
        ) : (
          <div>
            <h1>Trending today</h1>
            <MoviesList films={trendingMovies} />
          </div>
        )}
      </>
    );
  }
}

export default HomePage;
