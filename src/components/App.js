import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import styles from './App.module.css';
import AppBar from './AppBar';
import routes from '../routes';

const HomePage = lazy(() =>
  import('../views/HomePage' /* webpackChunkName: "home-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    '../views/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
  ),
);
const MoviesPage = lazy(() =>
  import('../views/MoviesPage' /* webpackChunkName: "movies-page" */),
);

function App() {
  return (
    <div className={styles.App}>
      <AppBar />
      <Suspense fallback={<h1>Loading ...</h1>}>
        <Switch>
          <Route path={routes.home} exact component={HomePage} />
          <Route
            path={routes.movieDetails}
            render={props => <MovieDetailsPage {...props} />}
          />
          <Route path={routes.movies} component={MoviesPage} />
          <Redirect to={routes.home} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
