import React, { Component } from 'react';
import SearchForm from '../../components/SearchForm';
import filmsApi from '../../services/films-api';
import MoviesList from '../../components/MoviesList';
import { withRouter } from 'react-router-dom';
import ErrorMessage from '../../components/ErrorMessage';

class MoviesPage extends Component {
  state = {
    query: '',
    moviesForQuery: [],
    message: '',
    error: null,
  };

  componentDidMount() {
    const { history } = this.props;
    if (history.location.search) {
      try {
        const query = history.location.search.slice(7);
        this.setState({ query: query });
      } catch (error) {
        this.setState({ error });
      }
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;
    if (!query) {
      return;
    }
    if (query !== prevState.query) {
      try {
        const moviesForQuery = await filmsApi.fetchMoviesForQuery(query);
        if (moviesForQuery.results.length === 0) {
          return this.setState({ message: 'No results, try another query' });
        }
        this.setState({ moviesForQuery: moviesForQuery.results });
        // console.log(moviesForQuery.results);
      } catch (error) {
        this.setState({ error });
      }
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
    this.setState({
      moviesForQuery: [],
      message: '',
      error: null,
    });
  };

  render() {
    const { moviesForQuery, error, message } = this.state;
    const { onSubmit } = this;
    return (
      <>
        <SearchForm onSubmit={onSubmit} />
        {error && <ErrorMessage />}
        {moviesForQuery.length > 0 && <MoviesList films={moviesForQuery} />}
        {message && <p>{message}</p>}
      </>
    );
  }
}

export default withRouter(MoviesPage);
