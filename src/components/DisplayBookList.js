import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DisplayAbook from './DisplayAbook';
import { gettingBooks } from '../redux/fetch/booksFetcher';
import styles from './DisplayBookList.module.css';

const DisplayBookList = () => {
  const dispatch = useDispatch();

  const { books } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(gettingBooks());
  }, [dispatch]);

  return (
    <>
      <div className={styles.books_cont}>
        <ul className={styles.books_min_cont}>
          {books.map((book) => (
            <DisplayAbook
              Id={book.Id}
              key={book.Id}
              Title={book.title}
              Author={book.author}
              Category={book.category}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default DisplayBookList;
