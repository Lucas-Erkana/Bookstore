import React from 'react';
import Navbar from './components/Navbar';
import BooksList from './components/BooksList'
import Categories from './components/Categories'
import { Routes, Route } from 'react-router-dom'

class App extends React.Component {
    state = {
        books: [
            {title: 'The Lord of the Rings', author: 'John Ronald Reuel Tolkien'},
            {title: 'Harry Potter', author: 'Joanne Kathleen Rowling'},
            {title: 'A Game of Thrones ', author: 'George Raymond Richard Martin'}
        ]
    }

    render() {
        return (
            <div>
                <Navbar />
                <Routes>
                    <Route path='/' element={<BooksList books={this.state.books}/>} />
                    <Route path='/categories' element={<Categories />} />
                </Routes>
            </div>
        )
    }
}

export default App;
