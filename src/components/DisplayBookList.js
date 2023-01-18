import React from 'react';
import DisplayAbook from './DisplayAbook';

const DisplayBookList = () => {
  const books = [
    {
      Id: 101,
      Title: 'The Lord of the Rings',
      Author: 'J. R. R. Tolkien',
    },
  ];
  return (
    <>
      <div className="book_cont">
        <ul>
          {books.map((book) => (
            <DisplayAbook
              Title={book.Title}
              Author={book.Author}
              key={book.Id}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default DisplayBookList;
