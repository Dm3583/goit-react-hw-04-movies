import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import styles from './App.module.css';
import AppBar from './AppBar';
import HomePage from '../views/HomePage';
import MoviesPage from '../views/MoviesPage';
import MovieDetailsPage from '../views/MovieDetailsPage';
import routes from '../routes';

function App() {
  return (
    <div className={styles.App}>
      <AppBar />
      <Switch>
        <Route path={routes.home} exact component={HomePage} />
        <Route
          path={routes.movieDetails}
          render={props => <MovieDetailsPage {...props} />}
        />
        <Route path={routes.movies} component={MoviesPage} />
        <Redirect to={routes.home} />
      </Switch>
    </div>
  );
}

export default App;
