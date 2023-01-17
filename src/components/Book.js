import React from 'react';

class Book extends React.Component {
    render() {
        return (
            <div>
                <h3>Title: {this.props.title}</h3>
                <p>Author: {this.props.author}</p>
            </div>
        )
    }
}
export default Book;
