import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deletingBook } from '../redux/fetch/booksFetcher';
import styles from './DisplayAbook.module.css';

const DisplayAbook = (props) => {
  const {
    Category, Title, Author, Id,
  } = props;

  const dispatch = useDispatch();

  const bookRemoveHandle = () => {
    dispatch(deletingBook(Id));
  };

  return (
    <li className={styles.book_cont}>
      <div className={styles.book_left}>
        <p className={styles.book_cat}>{Category}</p>
        <h2 className={styles.book_title}>{Title}</h2>
        <p className={styles.book_per}>{Author}</p>
        <div className={styles.book_butts}>
          <button type="button" className={styles.butt}>
            Comments
          </button>
          <button
            type="button"
            onClick={bookRemoveHandle}
            className={styles.book_butts_remove}
          >
            Remove
          </button>
          <button type="button" className={styles.butt}>
            Edit
          </button>
        </div>
      </div>
      <div className={styles.book_right}>
        <div className={styles.perc_left}>
          <div className={styles.circle_left}>
            <div className={styles.circle_outer}>
              <div className={styles.circle_inner} />
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="160px"
              height="160px"
            >
              <defs>
                <linearGradient id="GradientColor">
                  <stop offset="0%" stopColor="#e91e63" />
                  <stop offset="100%" stopColor="#673ab7" />
                </linearGradient>
              </defs>
              <circle cx="42" cy="50" r="36" strokeLinecap="round" />
            </svg>
          </div>
          <div className={styles.circle_right}>
            <p className={styles.pers}>77%</p>
            <p className={styles.comp}>Completed</p>
          </div>
        </div>
        <div className={styles.perc_right}>
          <div className={styles.perc_right_in}>
            <h4>CURRENT CHAPTER</h4>
            <p>Chapter 10</p>
            <div>
              <button type="button">UPDATE PROGRESS</button>
              {' '}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

DisplayAbook.propTypes = {
  Category: PropTypes.string.isRequired,
  Title: PropTypes.string.isRequired,
  Author: PropTypes.string.isRequired,
  Id: PropTypes.string.isRequired,
};

export default DisplayAbook;
