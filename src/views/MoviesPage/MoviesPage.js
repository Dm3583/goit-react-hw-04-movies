import React, { Component } from 'react';
import SearchForm from '../../components/SearchForm';
import filmsApi from '../../services/films-api';
import FilmsList from '../../components/FilmsList';
import { withRouter } from 'react-router-dom';

class MoviesPage extends Component {
  state = {
    query: '',
    moviesForQuery: [],
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;
    if (query !== prevState.query) {
      const moviesForQuery = await filmsApi.fetchMoviesForQuery(query);
      this.setState({ moviesForQuery: moviesForQuery.results });
      console.log(moviesForQuery.results);
    }
  }

  onSubmit = value => {
    this.setState({ query: value });
    // console.log(value);
    const { history } = this.props;
    const location = {
      search: `?query=${value}`,
      // pathname: '/somewhere',
      // state: { fromDashboard: true }
    };
    history.push(location);
  };

  render() {
    const { moviesForQuery } = this.state;
    const { onSubmit } = this;
    return (
      <>
        <SearchForm onSubmit={onSubmit} />
        {moviesForQuery.length > 0 && <FilmsList films={moviesForQuery} />}
      </>
    );
  }
}

export default withRouter(MoviesPage);
