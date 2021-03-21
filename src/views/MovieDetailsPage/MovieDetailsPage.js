import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import filmsApi from '../../services/films-api';
import Button from '../../components/Button';
import MovieCard from '../../components/MovieCard';
import styles from './MovieDetailsPage.module.css';
import Cast from '../../components/Cast';

class MovieDetailsPage extends Component {
  state = {
    title: '',
    poster_path: '',
    vote_average: '',
    overview: '',
    genres: [],
    cast: [],
    reviews: [],
  };

  async componentDidMount() {
    const movieId = this.props.match.params.movieId;
    const details = await filmsApi.fetchMovieDetails(movieId);
    const cast = await filmsApi.fetchMovieCast(movieId);
    const reviews = await filmsApi.fetchMovieReviews(movieId);
    this.setState({
      ...details,
      cast: cast.cast,
      reviews: reviews.results,
    });
    console.log(this.state);
  }

  render() {
    const {
      title,
      poster_path,
      vote_average,
      overview,
      genres,
      cast,
      reviews,
    } = this.state;
    const userScore = Number(vote_average) * 10;
    const movieId = this.props.match.params.movieId;
    return (
      <div className={styles.movieDetailsWrapper}>
        <Button type={'button'}>Go back</Button>
        <MovieCard
          title={title}
          poster_path={poster_path}
          userScore={userScore}
          overview={overview}
          genres={genres}
        />

        <div className={styles.filmDetailsNav}>
          <p>Additional information</p>
          <ul>
            <li>
              <NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink>
            </li>
            <li>
              <NavLink to={`/movies/${movieId}/review`}>Reviews</NavLink>
            </li>
          </ul>
        </div>

        <Switch>
          <Route
            path="/movies/:movieId/cast"
            render={props => <Cast {...props} cast={cast} />}
          />
          <Route path="/movies/:movieId/review" />
        </Switch>
      </div>
    );
  }
}

export default MovieDetailsPage;
