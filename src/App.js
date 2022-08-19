import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Categories from './components/Categories';
import './style/page.css';

function App() {
  return (
    <>

      <Router>
        <div className="container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catagory" element={<Categories />} />
          </Routes>
        </div>
      </Router>

    </>
  );
}

export default App;
