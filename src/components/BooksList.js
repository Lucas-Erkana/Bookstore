import React from 'react';
import Book from './Book'

class BooksList extends React.Component {
    render() {
        return (
            <div>
                {this.props.books.map((book, index) => 
                    <Book key={index} title={book.title} author={book.author} />
                )}
            </div>
        )
    }
}
export default BooksList;
