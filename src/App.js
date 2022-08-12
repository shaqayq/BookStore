import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Categories from './components/Categories';

function App() {
  return (
    <>

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catagory" element={<Categories />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
