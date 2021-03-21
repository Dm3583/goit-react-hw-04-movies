import React from 'react';
import { Switch, Rote, NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => (
  <nav>
    <ul className={styles.navList}>
      <li className={styles.item}>
        <NavLink
          to="/"
          exact
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Home
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink
          to="/movies"
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Movies
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default NavBar;
