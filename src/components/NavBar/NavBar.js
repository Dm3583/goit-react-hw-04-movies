import React from 'react';
import { Switch, Rote, NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => (
  <nav>
    <NavLink
      to="./"
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Home
    </NavLink>
    <NavLink
      to="./movies"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Movies
    </NavLink>
  </nav>
);

export default NavBar;
