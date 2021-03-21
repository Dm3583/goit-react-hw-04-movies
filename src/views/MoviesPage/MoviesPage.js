import React, { Component } from 'react';
import SearchForm from '../../components/SearchForm';
import filmsApi from '../../services/films-api';
import MoviesList from '../../components/MoviesList';
import { withRouter } from 'react-router-dom';

class MoviesPage extends Component {
  state = {
    query: '',
    moviesForQuery: [],
  };

  componentDidMount() {
    const { history } = this.props;
    if (history.location.search) {
      const query = history.location.search.slice(7);
      this.setState({ query: query });
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;
    if (query !== prevState.query) {
      const moviesForQuery = await filmsApi.fetchMoviesForQuery(query);
      this.setState({ moviesForQuery: moviesForQuery.results });
      // console.log(moviesForQuery.results);
    }
  }

  onSubmit = value => {
    this.setState({ query: value });
    // console.log(value);
    const { history } = this.props;
    const location = {
      search: `?query=${value}`,
    };
    history.push(location);
  };

  render() {
    const { moviesForQuery } = this.state;
    const { onSubmit } = this;
    return (
      <>
        <SearchForm onSubmit={onSubmit} />
        {moviesForQuery.length > 0 && <MoviesList films={moviesForQuery} />}
      </>
    );
  }
}

export default withRouter(MoviesPage);
