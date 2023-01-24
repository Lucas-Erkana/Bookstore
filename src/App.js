import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import Navbar from './components/Navbar';
import Books from './pages/Books';
import Categories from './pages/Categories';

const App = () => (
  <Router>
    <div className={styles.main_cont}>
      <div className={styles.min_cont}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
