import React from 'react';
import { useSelector } from 'react-redux';
import DisplayAbook from './DisplayAbook';

const DisplayBookList = () => {
  const books = useSelector((state) => state.books);
  return (
    <>
      <div className="book_cont">
        <ul>
          {books.books.map((book) => (
            <DisplayAbook
              Id={book.id}
              key={book.id}
              Title={book.title}
              Author={book.author}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default DisplayBookList;
