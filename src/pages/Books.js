import React from 'react';
import AddBookForm from '../components/AddBookForm';
import DisplayBookList from '../components/DisplayBookList';
import styles from './Books.module.css';

const Books = () => (
  <div className={styles.big_cont}>
    <div className={styles.big_min_cont}>
      <DisplayBookList />
      <AddBookForm />
    </div>
  </div>
);

export default Books;
