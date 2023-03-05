import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import './main.css';
import BlogDetails from './pages/BlogDetails';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog-details/:blogId' element={<BlogDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
