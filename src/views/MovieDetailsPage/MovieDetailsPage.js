import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import filmsApi from '../../services/films-api';
import Button from '../../components/Button';
import MovieCard from '../../components/MovieCard';
import styles from './MovieDetailsPage.module.css';
import Reviews from '../../components/Reviews';
import Cast from '../../components/Cast';
import MovieDetailsNav from '../../components/MovieDetailsNav';

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
    // console.log(this.state);
  }

  handleGoBack = () => {
    const { location, history } = this.props;
    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    history.push('/');
  };

  render() {
    const { handleGoBack } = this;
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
        <Button type="button" onClick={handleGoBack}>
          Go back
        </Button>
        <MovieCard
          title={title}
          poster_path={poster_path}
          userScore={userScore}
          overview={overview}
          genres={genres}
        />
        <MovieDetailsNav movieId={movieId} />

        <Switch>
          <Route
            path="/movies/:movieId/cast"
            render={props => <Cast {...props} cast={cast} />}
          />
          <Route
            path="/movies/:movieId/review"
            render={props => <Reviews {...props} reviews={reviews} />}
          />
        </Switch>
      </div>
    );
  }
}

export default MovieDetailsPage;
