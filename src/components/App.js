import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import styles from './App.module.css';
import AppBar from './AppBar';
import HomePage from '../views/HomePage';
import MoviesPage from '../views/MoviesPage';
import MovieDetailsPage from '../views/MovieDetailsPage';

function App() {
  return (
    <div className={styles.App}>
      <AppBar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route
          path="/movies/:movieId"
          render={props => <MovieDetailsPage {...props} />}
        />
        <Route path="/movies" component={MoviesPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
