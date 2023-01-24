import React from 'react';
import { useSelector } from 'react-redux';
import DisplayAbook from './DisplayAbook';

const DisplayBookList = () => {
<<<<<<< HEAD
  const dispatch = useDispatch();

  const { books } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(gettingBooks());
  }, [dispatch]);

=======
  const books = useSelector((state) => state.books);
>>>>>>> parent of b6c1a79 (Update DisplayBookList.js)
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
<<<<<<< HEAD
        <div>
          <div>
            <p>80%</p>
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
=======
>>>>>>> parent of b6c1a79 (Update DisplayBookList.js)
      </div>
    </>
  );
};

export default DisplayBookList;
