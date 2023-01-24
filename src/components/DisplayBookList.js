import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DisplayAbook from './DisplayAbook';
import { gettingBooks } from '../redux/fetch/booksFetcher';

const DisplayBookList = () => {
  const dispatch = useDispatch();

  const { books } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(gettingBooks());
  }, [dispatch]);

  return (
    <>
      <div className="book_cont">
        <ul>
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
        <div>
          <div>
            <p>85%</p>
            <p>Completed</p>
          </div>
        </div>
        <div>
          <h4>CURRENT CHAPTER</h4>
          <p>Chapter 7: “The Boggart in the Wardrobe”</p>
          <div>
            <button type="button">UPDATE PROGRESS</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayBookList;
