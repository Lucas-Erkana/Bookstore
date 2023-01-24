import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import user from '../images/user.svg';

const Navbar = () => (
  <div className={styles.nav_cont}>
    <nav>
      <h1>Bookstore CMS</h1>
      <ul>
        <li className={styles.small_cont}>
          <Link to="/" className={styles.link}>
            BOOKS
          </Link>
        </li>
        <li className={styles.small_cont}>
          <Link to="/categories" className={styles.link}>
            CATEGORIES
          </Link>
        </li>
      </ul>
      <div className={styles.user}>
        <div className={styles.user_min}>
          <img src={user} alt="user-icon" />
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;
