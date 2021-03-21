import React from 'react';
import { Switch, Rote, NavLink } from 'react-router-dom';
import styles from './AppBar.module.css';
import NavBar from '../NavBar';

const AppBar = () => (
  <header className={styles.AppBar}>
    <NavBar />
  </header>
);

export default AppBar;
